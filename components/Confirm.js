import Router from 'next/router'
import axios from 'axios'
import ContactButton from './ContactButton'

const Confirm = props => {
  const state = props.state
  const { name, email, title, message } = state
  const handleSubmit = e => {
    e.preventDefault()
    const data = state
    console.log(data)
    axios({
      method: 'POST',
      url: '/api/contact',
      params: data
    })
    window.open('/complete')
    Router.push(`/`)
  }

  const onClick = () => {
    const confirm = document.getElementById('confirm')
    confirm.classList.add('confirm')
  }
  return (
    <div className="c">
      <p>入力内容の確認</p>
      <form
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <p>お名前：{name}</p>
        <p>メールアドレス：{email}</p>
        <p>タイトル：{title}</p>
        <p>メッセージ：{message}</p>
        <div>
          <div onClick={() => onClick()}>
            <ContactButton type="button" value="修正する" />
          </div>
          <ContactButton type="submit" value="送信する" />
        </div>
      </form>
      <style jsx>{`
        .c {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #00afcc;
        }
      `}</style>
    </div>
  )
}

export default Confirm
