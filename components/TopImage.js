import ScrollDown from './ScrollDown'

const TopImage = () => (
  <div id="topImage">
    <img className="topImg" src="../static/Top.jpg" alt="ciehum" />
    <ScrollDown />
    <style jsx>{`
      #topImage {
        width: 100vw;
        height: 100vh;
        background-color: #a1d8e6;
      }
      .topImg {
        width: 100%;
        padding-top: 150px;
      }
      @media screen and (min-width: 650px) {
        .topImg {
          width: 70%;
          padding: 150px;
        }
      }
    `}</style>
  </div>
)

export default TopImage
