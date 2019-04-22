import ScrollDown from './ScrollDown'

const TopImage = () => (
  <div id="topImage">
    {/* <img className="topImg" src="../static/img/DSC06146.JPG" alt="ciehum" /> */}
    <ScrollDown />
    <style jsx>{`
      #topImage {
        width: 100vw;
        height: 100vh;
        background-color: #a1d8e6;
        background-image: url('../static/img/DSC06146.JPG');
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
      }
      @media screen and (min-width: 651px) {
        .topImg {
          width: 70%;
        }
      }
      @media screen and (max-width: 650px) {
        .topImg {
          height: 100vh;
        }
      }
    `}</style>
  </div>
)

export default TopImage
