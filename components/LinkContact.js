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
        width: 100vw;
        height: 50vh;
        background-color: #00afcc;
      }
      .linkContactDiv {
        width: 300px;
        height: 40px;
        color: white;
        background-color: #a1d8e6;
        display: table;
        text-align: center;
        text-decoration: none;
        border: 2px solid white;
        border-radius: 2px;
        cursor: pointer;
        transition: 0.4s;
      }
      .linkContactDiv :hover {
        color: #a1d8e6;
        background-color: white;
        border: 2px solid #a1d8e6;
      }
      .linkContactA {
        display: table-cell;
        vertical-align: middle;
      }
    `}</style>
  </div>
)

export default LinkContact
