import React from 'react'
import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'
import TopImage from '../components/TopImage'
import TopAbout from '../components/TopAbout'
import TopInsta from '../components/TopInsta'
import TopContact from '../components/TopContact'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>ciehum</title>
        </Head>
        <ReactFullpage
          navigation
          lazyLoading
          render={comp => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <TopImage />
              </div>
              <div className="section">
                <TopAbout />
              </div>
              <div className="section">
                <TopInsta />
              </div>
              <div className="section">
                <TopContact />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </React.Fragment>
    )
  }
}

export default Home
