import { ExtendableContext } from 'koa'
import got from 'got';
import { jwtSign } from '../utils'

const KOTOCAPTCHA_URL = process.env.KOTOCAPTCHA_URL || 'https://captcha.kotobank.ch'

export default async function handler(ctx: ExtendableContext) {
  const captchaData = await got(`${KOTOCAPTCHA_URL}/new`, {
    headers: {
      'user-agent': 'https://github.com/selfisekai/cdruk'
    }
  }).json() as {
    md5: string,
    token: string,
    url: string,
  }

  const token = jwtSign({
    resultMD5: captchaData.md5,
    generationTime: new Date().getTime(),
  })
  ctx.body = {
    data: {
      token,
      url: `${KOTOCAPTCHA_URL}${captchaData.url}`,
    }
  }
}
