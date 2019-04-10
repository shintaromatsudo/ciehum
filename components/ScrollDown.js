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
        border-left: 3px solid #eaedf7;
      }
      p {
        font-size: 20px;
        padding: 10px;
        margin-top: 0;
        color: #eaedf7;
      }
    `}</style>
  </div>
)

export default ScrollDown
