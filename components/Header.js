import Link from 'next/link'
import BurgerMenu from './BurgerMenu'

const Header = () => (
  <div className="header">
    <h1>ciehum</h1>
    <BurgerMenu />
    <style jsx>{`
      .header {
        z-index: 9999;
      }
      @media screen and (max-width: 649px) {
      }
      @media screen and (min-width: 650px) {
      }
      .header {
        width: 100%;
        height: 70px;
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
      }
    `}</style>
  </div>
)

export default Header
