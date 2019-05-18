import React from "react"

import OverLay from "../over-lay/over-lay"

import HeaderImg from "../../images/header.jpg"

import "./header.scss"

export default function header() {
  return (
    <OverLay alpha={5}>
      <div
        style={{
          backgroundImage: `url(${HeaderImg})`,
        }}
        className="header"
      >
        <h2>Discover</h2>
        <p>
          All The <span className="primary">Delecious</span> Receipes In One
          Place
        </p>
      </div>
    </OverLay>
  )
}
