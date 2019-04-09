const ScrollDown = () => (
  <div className="scrollDown">
    <p>Scroll Down</p>
    <style jsx>{`
      .scrollDown {
        position: absolute;
        left: 20px;
        bottom: 0;
        width: 50px;
        height: 20px;
        border-left: 2px solid white;
      }
      p {
        font-size: 10px;
        color: white;
      }
    `}</style>
  </div>
)

export default ScrollDown
