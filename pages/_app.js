import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NextSeo from 'next-seo'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        {/* <Header /> */}
        <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }
}
