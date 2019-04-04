import React from 'react'
import Head from 'next/head'
import TopImage from '../components/TopImage'
import TopAbout from '../components/TopAbout'
import TopInsta from '../components/TopInsta'
import TopContact from '../components/TopContact'
import PageTopButton from '../components/PageTopButton'

class Home extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', event => this.handleScroll(), true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', event => this.handleScroll(), false)
  }

  handleScroll() {
    const ScrollY = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const scrollAnimationElm = document.querySelectorAll('.scrollIn')
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 200
      if (
        ScrollY >
        scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
      ) {
        scrollAnimationElm[i].classList.add('show')
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Ciehum</title>
        </Head>
        <TopImage />
        <TopAbout />
        <TopInsta />
        <TopContact />
        <PageTopButton />
        <style jsx>{`
          .show {
            opacity: 1;
            transform: translate(-100px, 0);
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default Home
