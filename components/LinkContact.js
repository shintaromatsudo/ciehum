import Link from 'next/link'

const LinkContact = () => (
  <div id="linkContact">
    <Link href="/contact">
      <div className="linkContactDiv">
        <a className="linkContactA">CONTACT</a>
      </div>
    </Link>
    <style jsx>{`
      #linkContact {
        position: relative;
        width: 100vw;
        height: 30vh;
        background-color: #00afcc;
        background-image: url('../static/img/DSC05683.JPG');
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
      }
      .linkContactDiv {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 300px;
        height: 40px;
        color: #eaedf7;
        background-color: #00afcc;
        display: table;
        text-align: center;
        text-decoration: none;
        border: 2px solid #eaedf7;
        border-radius: 2px;
        cursor: pointer;
        transition: 0.4s;
      }
      .linkContactDiv :hover {
        color: #00afcc;
        background-color: #a1d8e6;
        border: 2px solid #00afcc;
      }
      .linkContactA {
        display: table-cell;
        vertical-align: middle;
      }
    `}</style>
  </div>
)

export default LinkContact
