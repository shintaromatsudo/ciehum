const ScrollDown = () => (
  <div className="scrollDown">
    <p>Scroll Down</p>
    <style jsx>{`
      .scrollDown {
        position: absolute;
        left: 20px;
        bottom: 0;
        width: 150px;
        height: 50px;
        border-left: 2px solid white;
      }
      p {
        font-size: 20px;
        padding: 10px;
        margin-top: 0;
        color: white;
      }
    `}</style>
  </div>
)

export default ScrollDown
