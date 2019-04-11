import React from 'react'
import Title from '../components/Title'

const Complete = () => {
  const close = () => {
    window.close()
  }
  
  return (
  <React.Fragment>
    <Title title="complete" />
    <p>送信完了</p>
    <p>入力いただいたメールアドレスに自動的に送信完了メールを送信させていただきました。</p>
    <p>お問い合わせID</p>
    <p>お問い合わせ内容</p>
    <p>Title</p>
    <p>Name</p>
    <p>EmailAddress</p>
    <p>Messasge</p>
    <button onClick={close}>このページを閉じる</button>
  </React.Fragment>
)
}

export default Works
