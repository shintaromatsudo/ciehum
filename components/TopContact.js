const TopContact = () => (
  <div id="topContact">
    <h1>お問い合わせ</h1>
    <p>お気軽にお問い合わせください。心よりお待ちしております。</p>
    <form>
      <label>
        <input placeholder="Name" />
      </label>
      <label>
        <input placeholder="Title" />
      </label>
      <label>
        <input placeholder="Message" />
      </label>
      <button type="submit">submit</button>
    </form>
    <p>
      <a href="mailto:misara2332@gmail.com">メール</a>
    </p>
    <div className="line">line</div>
    {/* <div
      class="line-it-button"
      data-lang="ja"
      data-type="friend"
      data-lineid="@lineteamjp"
      style="display: none;"
    /> */}
    <script
      src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js"
      async="async"
      defer="defer"
    />
    <p className="facebook">
      <a href="https://www.facebook.com/ciehumhahajima">facebook</a>
    </p>
    <style jsx>{`
      #topContact {
        width: 100vw;
        height: 100vh;
        text-align: center;
        background-color: #00afcc;
      }
      .line {
        width: 30px;
        background-color: #01b901;
        border: 2px solid #01b901;
        border-radius: 0;
        color: #fff;
        padding: 4px 32px;
        text-align: center;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .line:hover {
        background-color: #fff;
        color: #55acee;
      }
      .facebook {
        width: 30px;
        background-color: #3b5998;
        border: 2px solid #3b5998;
        border-radius: 0;
        color: #fff;
        padding: 4px 32px;
        text-align: center;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }
      .facebook:hover {
        background-color: #fff;
        color: #3b5998;
      }
    `}</style>
  </div>
)

export default TopContact
