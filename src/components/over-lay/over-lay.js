import React from "react"

import "./over-lay.scss"

function OverLay(props) {
  return (
    <div
      className={`overlay ${props.className ? props.className : ""}`}
      style={{
        ...props.style,
        position: "relative",
      }}
    >
      {props.children}
      <div
        className="overlay__leaf"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${props.alpha / 10})`,
        }}
      />
    </div>
  )
}

export default OverLay
