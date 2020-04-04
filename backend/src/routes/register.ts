import { ExtendableContext } from 'koa'
import bcrypt from 'bcryptjs'
import consola from 'consola'
import { emailRegex, jwtSign, jwtVerify, md5 } from '../utils'
import { User } from '../entity/User'

export default async function handler(ctx: ExtendableContext) {
  const { body } = ctx.request

  ctx.validate(body, 'Request body should not be empty')

  const captchaData = jwtVerify(body.captchaToken) as any
  consola.log(captchaData)

  ctx.validate(typeof captchaData === 'object', 'Invalid captcha token')
  ctx.validate(typeof captchaData.resultMD5 === 'string', 'Invalid captcha token')
  ctx.validate(captchaData.generationTime + (5 * 60 * 60 * 1000) > new Date().getTime(), 'Expired captcha')
  ctx.validate(captchaData.resultMD5 === md5(body.captcha), 'Invalid captcha')

  ctx.validate(body.email != null, 'Request body should contain email')
  ctx.validate(typeof body.email === 'string', 'Email should be type string')
  ctx.validate(body.email.trim() !== '', 'Email should not be empty')
  ctx.validate(emailRegex.test(body.email), 'Email should be an email')

  ctx.validate(body.password != null, 'Request body should contain password')
  ctx.validate(typeof body.password === 'string', 'Password should be type string')
  ctx.validate(body.password.trim() !== '', 'Password should not be empty')
  ctx.validate(body.password.length > 8, 'Password should have at least 8 characters')

  const repo = ctx.getRepo(User)

  const existing = await repo.count({ email: body.email })
  ctx.validate(existing === 0, 'Account already exists')

  const user = new User()
  user.email = body.email
  user.password = await bcrypt.hash(body.password, await bcrypt.genSalt())

  await repo.save(user)

  const token = jwtSign({ ...user })
  ctx.body = {
    data: {
      token
    }
  }
}