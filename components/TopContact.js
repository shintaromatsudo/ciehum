import Footer from '../components/Footer'
import Form from '../components/Form'

const TopContact = () => (
  <div id="topContact">
    <h2>お問い合わせ</h2>
    <Form />
    <div className="link">
      <p>
        <a href="mailto:misara2332@gmail.com">メールする</a>
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
