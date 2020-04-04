import React from 'react'
import App from 'next/app'
import '../node_modules/bulma/bulma.sass'
import '../css/theme.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
