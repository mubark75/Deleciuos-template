import React from "react"

import OverLay from "../over-lay/over-lay"

import HeaderImg from "../../images/header.jpg"

import "./bread-crumb.scss"

export default function BreadCrumb({ page }) {
  return (
    <OverLay alpha={5}>
      <div
        style={{
          backgroundImage: `url(${HeaderImg})`,
        }}
        className="bread-crumb"
      >
        <h2>
          Home <span className="primary">/</span> {page}
        </h2>
      </div>
    </OverLay>
  )
}
