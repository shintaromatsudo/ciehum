import Footer from '../components/Footer'

class Form extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
      name: "",
      email: "",
      title: "",
      message: ""
    }
  }
  
  template(value) {
    console.log(value)
    switch (value) {
      case 1:
        this.setState=({title: "送料について",
      message: "こんにちは"})
        break;
      case 2:
        this.setState=({title: "日数について",
      message: "こんにちは"})
        break;
      case 3:
        this.setState=({title: "オーダーメイドについて",
      message: "こんにちは"})
        break;
      case 4:
        this.setState=({title: "返金・返品について",
      message: "こんにちは"})
        break;
      case 5:
        this.setState=({title: "その他の問い合わせ",
      message: "こんにちは"})
        break;
    }
  }
  
   handleSubmit(e) {
    e.preventDefault()
    // this.props.dispatch(postData(this.props.form))
    Router.pushRoute(`/`)
  }
  
  render() {
  const {name, email, title, message} = this.state
  return (
  <div id="form">
    <p>お気軽にお問い合わせください。心よりお待ちしております。</p>
    <form
      onSubmit={value => {
        this.handleSubmit(value)
      }}
    >
      <div className="form">
        <label>
          <input type="text" placeholder="Name" value={name}  required />
        </label>
      </div>
      <div className="form">
        <label>
          <input type="email" name="email" placeholder="MailAddress" value={email}  required />
        </label>
      </div>
      <div>
        <select name="template" onChange={value => {this.template(value}}>
          <option value="">テンプレートを使用する</option>
          <option value="1">送料について</option>
          <option value="2">日数について</option>
          <option value="3">オーダーメイドについて</option>
          <option value="4">返金・返品について</option>
          <option value="5">その他の問い合わせ</option>
        </select>
      </div>
      <div className="form">
        <label>
          <input type="text" placeholder="Title" value={title} />
        </label>
      </div>
      <div className="form">
        <label>
          <textarea placeholder="Message" value={message} />
        </label>
      </div>
      <div>
        <button type="submit">送信内容を確認する</button>
      </div>
    </form>
    <p>よくあるお問い合わせ</p>
    <style jsx>{`
      #form {
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
      select {
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
    `}</style>
  </div>
)
}
}

export default TopContact
