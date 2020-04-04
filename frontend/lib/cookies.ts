import cookie from 'js-cookie'

export const isBrowser = typeof window !== 'undefined'

const getCookieFromServer = (key: string, req): string => {
  if (!req.headers.cookie) {
    return undefined
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`))
  if (!rawCookie) {
    return undefined
  }
  return rawCookie.split('=')[1]
}

const getCookieFromBrowser = (key) => {
  return cookie.get(key)
}

const setCookie = (
  key: string,
  value: string | object,
  options?: cookie.CookieAttributes
) => {
  if (isBrowser) {
    cookie.set(key, value, options)
  }
}

const getCookie = (key, req?): string => {
  return isBrowser ? getCookieFromBrowser(key) : getCookieFromServer(key, req)
}

const destroyCookie = (key: string, options?: cookie.CookieAttributes) => {
  if (isBrowser) {
    cookie.remove(key, options)
  }
}

export default {
  set: setCookie,
  get: getCookie,
  destroy: destroyCookie,
}
