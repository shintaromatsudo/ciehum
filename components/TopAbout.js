import React from 'react'

const TopAbout = () => (
  <div id="topAbout">
    <h2>About</h2>
    <p>ciehumをご覧いただきありがとうございます。</p>

    <p>小笠原諸島でアクセサリーと小物の制作をしています。</p>

    <p>ciehumは造語です。</p>

    <p>coloful</p>
    <p>island</p>
    <p>enjoyment</p>
    <p>happy</p>
    <p>you & me</p>

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

    <style jsx>{`
      #topAbout {
        width: 100vw;
        height: 100vh;
        background-color: #00afcc;
      }
      h2 {
        margin: 0;
        padding: 10px;
        color: #f5ecf4;
        text-align: center;
      }
      p {
        margin: 0, 10px;
        padding: 0, 10px;
        color: #f5ecf4;
      }
    `}</style>
  </div>
)

export default TopAbout
