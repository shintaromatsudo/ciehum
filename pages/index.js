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
  
  render() {
  return (
  <React.fragment>
    <Head>
      <title>Ciehum</title>
    </Head>
    <TopImage />
    <TopAbout />
    <TopInsta />
    <TopContact />
    <PageTopButton />
  </React.Fragment>
)
}
}

export default Home