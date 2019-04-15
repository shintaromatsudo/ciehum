import React from 'react'

const Button = props => (
  <React.Fragment>
    <a href={props.href} target="_blank">
      MORE
    </a>
    <style jsx>{`
      a {
        width: 100px;
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
      a :hover {
        background: #9b72b0;
        color: white;
        cursor: pointer;
      }
    `}</style>
  </React.Fragment>
)

export default Button
