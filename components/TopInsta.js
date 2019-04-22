import Button from './Button'

const TopInsta = () => (
  <div id="topInsta">
    <div className="instaImage">
      <h2>INSTAGRAM</h2>
    </div>
    <div className="instaLink">
      <Button href="https://www.instagram.com/ciehum" />
    </div>
    <style jsx>{`
      #topInsta {
        width: 100vw;
        height: 100vh;
        background-color: #a1d8e6;
      }
      .instaImage {
        height: 100px;
        background-image: url('../static/img/Top.jpg');
      }
      .instaLink {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default TopInsta
