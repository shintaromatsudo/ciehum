const ScrollDown = () => {
  const scrollDown = () => {
    const element = document.getElementById('topConcept')
    const rect = element.getBoundingClientRect()
    const position = rect.top
    window.scrollTo({
      top: position,
      left: 0,
      behavior: 'smooth'
    })
  }
  return (
    <div id="scrollDown">
      <a className="scrollDown" onClick={scrollDown}>
        Scroll Down
      </a>
      <style jsx>{`
        #scrollDown {
          position: absolute;
          left: 20px;
          bottom: 0;
          width: 150px;
          height: 50px;
          border-left: 3px solid #eaedf7;
        }
        .scrollDown {
          font-size: 20px;
          padding: 10px;
          margin-top: 0;
          color: #eaedf7;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default ScrollDown
