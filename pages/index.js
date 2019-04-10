import React from 'react'
import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'
import Title from '../components/Title'
import TopImage from '../components/TopImage'
import TopAbout from '../components/TopAbout'
import TopInsta from '../components/TopInsta'
import TopContact from '../components/TopContact'

// const Menu = () => (
//   <ul id="myMenu">
//     <li data-menuanchor="firstPage" class="active">
//       <a href="#firstPage">First section</a>
//     </li>
//     <li data-menuanchor="secondPage">
//       <a href="#secondPage">Second section</a>
//     </li>
//     <li data-menuanchor="thirdPage">
//       <a href="#thirdPage">Third section</a>
//     </li>
//     <li data-menuanchor="fourthPage">
//       <a href="#fourthPage">Fourth section</a>
//     </li>
//   </ul>
// )
const style = {
  backgroundColor: '#fff !important'
}

const Home = () => (
  <React.Fragment>
    <Title title="ハンドメイドアクセサリーのお店" />
    <ReactFullpage
      navigation
      // menu={Menu}
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
    <style global jsx>{`
      #fp-nav.fp-right {
        right: 1px;
      }
      #fp-nav ul li a span,
      .fp-slidesNav ul li a span {
        background-color: #eaedf7 !important;
      }
    `}</style>
  </React.Fragment>
)

export default Home
