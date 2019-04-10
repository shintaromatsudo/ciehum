import Footer from '../components/Footer'

const TopContact = () => (
  <div id="topContact">
    <h2>お問い合わせ</h2>
    <p>お気軽にお問い合わせください。心よりお待ちしております。</p>
    <form>
      <div className="form">
        <label>
          <input placeholder="Name" />
        </label>
      </div>
      <div className="form">
        <label>
          <input placeholder="Title" />
        </label>
      </div>
      <div className="form">
        <label>
          <textarea placeholder="Message" />
        </label>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
    <div className="link">
      <p>
        <a href="mailto:misara2332@gmail.com">メール</a>
      </p>
      <div className="line">line</div>
      <div
        className="line-it-button"
        data-lang="ja"
        data-type="friend"
        data-lineid="@lineteamjp"
      />
      <script
        src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js"
        async="async"
        defer="defer"
      />
      <p className="facebook">
        <a href="https://www.facebook.com/ciehumhahajima">facebook</a>
      </p>
    </div>
    <Footer />
    <style jsx>{`
      #topContact {
        width: 100vw;
        height: 100vh;
        text-align: center;
        background-color: #00afcc;
      }
      h2 {
        color: #9b72b0;
      }
      p {
        color: #9b72b0;
      }
      input {
        font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
          Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN,
          Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック, MSPGothic,
          sans-serif;
        background-color: #82cddd;
        border: solid 2px #9b72b0;
        width: 300px;
        height: 20px;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
      }
      textarea {
        font-family: Lato, Noto Sans JP, 游ゴシック Medium, 游ゴシック体,
          Yu Gothic Medium, YuGothic, ヒラギノ角ゴ ProN,
          Hiragino Kaku Gothic ProN, メイリオ, Meiryo, ＭＳＰゴシック, MSPGothic,
          sans-serif;
        background-color: #82cddd;
        border: solid 2px #9b72b0;
        width: 300px;
        height: 100px;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
      }
      /* Google Chrome, Safari, Opera 15+, Android, iOS */
      ::-webkit-input-placeholder {
        color: #9b72b0;
      }
      /* Firefox 18- */
      :-moz-placeholder {
        color: #9b72b0;
        opacity: 1;
      }
      /* Firefox 19+ */
      ::-moz-placeholder {
        color: #9b72b0;
        opacity: 1;
      }
      /* IE 10+ */
      :-ms-input-placeholder {
        color: #9b72b0;
      }
      button {
        width: 320px;
        height: 40px;
        margin: 10px;
        padding: 10px;
        display: inline-block;
        text-decoration: none;
        color: #9b72b0;
        border: solid 2px #9b72b0;
        border-radius: 5px;
        transition: 0.4s;
      }
      button :hover {
        background: #9b72b0;
        color: white;
        cursor: pointer;
      }
      .link {
        display: flexbox;
      }
      .line {
        width: 90px;
        background-color: #01b901;
        border: 2px solid #01b901;
        border-radius: 5px;
        color: #fff;
        margin: 15px;
        padding: 3px 0;
        text-align: center;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .line:hover {
        background-color: #fff;
        color: #01b901;
      }
      .facebook {
        width: 90px;
        background-color: #3b5998;
        border: 2px solid #3b5998;
        border-radius: 5px;
        color: #fff;
        padding: 3px 0;
        text-align: center;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .facebook:hover {
        background-color: #fff;
        color: #3b5998;
      }
      .facebook a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default TopContact
