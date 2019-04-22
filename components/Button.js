import React from 'react'

const Button = props => (
  <div id="linkButton">
    <a className="linkButton" href={props.href} target="_blank">
      MORE
    </a>
    <style jsx>{`
      #linkButton {
        display: table;
        text-align: center;
      }
      .linkButton {
        width: 100px;
        height: 40px;
        margin: 10px;
        padding: 10px;
        display: table-cell;
        vertical-align: middle;
        text-decoration: none;
        background-color: #7f1184;
        color: #eaedf7;
        font-size: 20px;
        border: solid 2px #eaedf7;
        border-radius: 5px;
        transition: 0.4s;
      }
      .linkButton :hover {
        background-color: #9b72b0;
        color: #7f1184;
        border: solid 2px #7f1184;
        cursor: pointer;
      }
    `}</style>
  </div>
)

export default Button
