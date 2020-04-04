import jwt from 'jsonwebtoken'
import { createHash } from 'crypto'

export function jwtSign(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET || 'ddd')
}

export function jwtVerify(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET || 'ddd')
}

export function md5(payload: string) {
  return createHash('md5').update(payload).digest('hex')
}

// eslint-disable-next-line no-useless-escape
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/