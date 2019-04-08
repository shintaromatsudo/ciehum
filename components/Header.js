import Link from 'next/link'
import BurgerMenu from './BurgerMenu'

const Header = () => (
  <div className="header">
    <Link href="/">
      <a>Ciehum</a>
    </Link>
    <div className="link">
      <p>link</p>
    </div>
    <div className="burger">
      <BurgerMenu />
    </div>
    <style jsx>{`
      .header {
        z-index: 9999;
      }
      @media screen and (max-width: 649px) {
        .link {
          display: none;
        }
      }
      @media screen and (min-width: 650px) {
        .burger {
          display: none;
        }
      }
      a {
        color: black;
        text-decoration: none;
      }
      a :hover {
        opacity: 0.7;
      }
      .header {
        width: 100%;
        height: 70px;
        padding: 10px;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.7;
        background-color: white;
        box-shadow: 0 6px 6px -6px rgba(0, 0, 0, 0.15);
        display: grid;
        grid-template-columns: 150px 1fr;
      }
    `}</style>
  </div>
)

export default Header
