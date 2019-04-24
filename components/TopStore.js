import Button from './Button'

const TopStore = () => (
  <div id="topStore">
    <div className="storeImage">
      <h2>ONLINE STORE</h2>
    </div>
    <iframe
      frameBorder="0"
      height="300"
      width="220"
      src="http://ciehum.thebase.in/items/2609521/widget"
    />
    <div className="storeLink">
      <Button href="http://ciehum.thebase.in/" />
    </div>
    <style jsx>{`
      #topStore {
        width: 100vw;
        height: 100vh;
        background-color: #a1d8e6;
      }
      .storeImage {
        height: 100px;
        background-image: url('../static/img/Top.jpg');
      }
      .storeLink {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
)

export default TopStore
