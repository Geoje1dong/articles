import App, { Container, Head } from 'next/app'
import React from 'react'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Head>
        <title>mo-eum</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}