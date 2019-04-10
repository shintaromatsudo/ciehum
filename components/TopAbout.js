import React from 'react'

const TopAbout = () => (
  <div id="topAbout">
    <h2>About</h2>
    <div className="about">
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
      #topAbout {
        width: 100vw;
        height: 100vh;
        background-color: #00afcc;
      }
      .about {
        margin: 40px;
      }
      .text-center {
        text-align: center;
      }
      h2 {
        margin: 0;
        padding: 10px;
        color: #eaedf7;
        text-align: center;
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

export default TopAbout
