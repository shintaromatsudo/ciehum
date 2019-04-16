import React from 'react'
import Head from 'next/head'
import ReactFullpage from '@fullpage/react-fullpage'
import Title from '../components/Title'
import InitialProgress from '../components/InitialProgress'
import TopImage from '../components/TopImage'
import TopAbout from '../components/TopAbout'
import TopConcept from '../components/TopConcept'
import TopStore from '../components/TopStore'
import TopInsta from '../components/TopInsta'
import TopContact from '../components/TopContact'
import LinkContact from '../components/LinkContact'
import PageTopButton from '../components/PageTopButton'

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

class Home extends React.Component {
  constructor(props) {
    super(props)
    //ここで定義しておく
    this.fade = this.fade.bind(this)
    this.handleScroll = this.fade.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.fade)
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fade)
    window.removeEventListener('scroll', this.handleScroll)
  }

  fade = () => {
    const ScrollY = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    )
    const element = document.getElementById('scrollToTop')
    if (ScrollY < 50) {
      element.classList.remove('fadeIn')
      element.classList.add('fadeOut')
    } else {
      element.classList.add('fadeIn')
      element.classList.remove('fadeOut')
    }
  }

  handleScroll = () => {
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
        <Title title="ハンドメイドアクセサリーのお店" />
        {/* <InitialProgress /> */}
        <div id="main">
          {/* <ReactFullpage
        navigation
        menu={Menu}
        render={comp => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <TopImage />
            </div>
            <div className="section">
              <TopConcept />
            </div>
            <div className="section">
              <TopInsta />
            </div>
            <div className="section">
              <TopContact />
            </div>
          </ReactFullpage.Wrapper>
        )}
      /> */}
          <TopImage />
          <TopConcept />
          <TopStore />
          <LinkContact />
          <TopInsta />
          <PageTopButton />
        </div>
        <style global jsx>{`
          #fp-nav.fp-right {
            right: 1px;
          }
          #fp-nav ul li a span,
          .fp-slidesNav ul li a span {
            background-color: #eaedf7 !important;
          }
          #main {
            animation: fadeIn 3s;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default Home
