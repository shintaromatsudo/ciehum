import Button from './Button'

const TopStore = () => (
  <div id="topStore">
    <h2>ONLINE STORE</h2>
    {/* <iframe
      frameborder="0"
      height="380"
      width="220"
      src="http://ciehum.thebase.in/items/2609521/widget"
    /> */}
    <Button href="http://ciehum.thebase.in/" />
    <style jsx>{`
      #topStore {
        width: 100vw;
        height: 100vh;
        background-color: #a1d8e6;
      }
    `}</style>
  </div>
)

export default TopStore
