import React from 'react'

const TopConcept = () => (
  <div id="topConcept">
    <h2>CONCEPT</h2>
    <div className="concept">
      <p>ciehumをご覧いただきありがとうございます。</p>

      <p>小笠原諸島でアクセサリーと小物の制作をしています。</p>

      <p className="text-center">ciehumは造語です。</p>

      <p className="text-center">coloful</p>
      <p className="text-center">island</p>
      <p className="text-center">enjoyment</p>
      <p className="text-center">happy</p>
      <p className="text-center">you & me</p>

      <p>
        島での生活で目にして、感じる うみ、空、山、植物、いきもの
        の、美しく多彩な色をアクセサリーにのせていきます。
      </p>

      <p>
        手に取っていただいた方のHappyがふえるよう 願いを込めて制作しています。
      </p>

      {/* <p>
      ciehumのアクセサリーは手に取っていただきやすい価格にするため、主にゴールドかロジウムメッキを使用しております。
      商品によりましてはチタンやK14GFへの対応も承れますのでお問い合わせください。
      また、ピアスからイヤリングへの変更につきましてもお問い合わせください。
      </p> */}
    </div>
    <style jsx>{`
      #topConcept {
        width: 100vw;
        height: 100vh;
        background-color: #00afcc;
        // background-image: url('../static/img/DSC05683.JPG');
        // background-attachment: fixed;
        // background-size: cover;
        // background-position: center;
      }
      .concept {
        margin: 40px;
      }
      .text-center {
        text-align: center;
      }
      h2 {
        color: #eaedf7;
      }
      p {
        font-size: 10px;
        margin: 0;
        padding: 5px;
        color: #eaedf7;
      }
    `}</style>
  </div>
)

export default TopConcept
