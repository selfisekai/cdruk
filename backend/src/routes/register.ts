import { ExtendableContext } from 'koa'
import bcrypt from 'bcryptjs'
import { emailRegex, jwtSign } from '../utils'
import { User } from '../entity/User'

export default async function handler(ctx: ExtendableContext) {
  const { body } = ctx.request

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
  user.passwordSalt = await bcrypt.genSalt()
  user.password = await bcrypt.hash(body.password, user.passwordSalt)

  await repo.save(user)

  const token = jwtSign({ ...user })
  ctx.cookies.set('laravel_session', token)
  ctx.body = {
    data: {
      token,
      user
    }
  }
}