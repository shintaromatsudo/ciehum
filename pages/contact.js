import React from 'react'
import Title from '../components/Title'
import Form from '../components/Form'

const Contact = () => (
  <div id="contact">
    <Title title="contact" />
    <h2>お問い合わせ</h2>
    <Form />
    {/* <div className="link">
      <p className="facebook">
        <a href="https://www.facebook.com/ciehumhahajima">facebook</a>
      </p>
    </div> */}
    <style jsx>{`
      #contact {
        height: 100vh;
        margin: auto;
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

export default Contact
