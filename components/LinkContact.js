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
        border: 2px solid white;
        border-radius: 2px;
      }
      .linkContactA {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default LinkContact
