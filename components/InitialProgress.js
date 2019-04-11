const InitialProgress = () => (
  <div className="initialProgress">
    <p>ciehum‚Ö‚æ‚¤‚±‚»</p>
    <style jsx>{`
      .initialProgress {
        width: 100vw;
        height: 100vh;
        animation:fadeOut 3s;
      }
      p {
        font-size: 20px;
        color: #eaedf7;
      }
      @keyframes fadeOut {
        0% { 
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}</style>
  </div>
)

export default InitialProgress
