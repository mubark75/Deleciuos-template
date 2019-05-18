import React from "react"
import { Link } from "gatsby"

import "./services.scss"

import servicesImg from "../../images/services.png"

export default function Services() {
  return (
    <div className="services" style={{ margin: "50px 0" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-md-3 col-sm-6 col-12 mb-3"
            style={{ textAlign: "center" }}
          >
            <div style={{ width: "60px", height: "60px", margin: "auto" }}>
              <img className="img-res" src={servicesImg} alt="quality buffet" />
            </div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0px" }}>
              Rich Quality Buffet
            </h3>
            <p className="lead">
              Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
            </p>
          </div>
          <div
            className="col-md-3 col-sm-6 col-12 mb-3"
            style={{ textAlign: "center" }}
          >
            <div style={{ width: "60px", height: "60px", margin: "auto" }}>
              <img className="img-res" src={servicesImg} alt="quality buffet" />
            </div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0px" }}>
              Rich Quality Buffet
            </h3>
            <p className="lead">
              Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
            </p>
          </div>
          <div
            className="col-md-3 col-sm-6 col-12 mb-3"
            style={{ textAlign: "center" }}
          >
            <div style={{ width: "60px", height: "60px", margin: "auto" }}>
              <img className="img-res" src={servicesImg} alt="quality buffet" />
            </div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0px" }}>
              Rich Quality Buffet
            </h3>
            <p className="lead">
              Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
            </p>
          </div>
          <div
            className="col-md-3 col-sm-6 col-12 mb-3"
            style={{ textAlign: "center" }}
          >
            <div style={{ width: "60px", height: "60px", margin: "auto" }}>
              <img className="img-res" src={servicesImg} alt="quality buffet" />
            </div>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "0px" }}>
              Rich Quality Buffet
            </h3>
            <p className="lead">
              Lorem ipsum dolor sit ametcons ecteturadipis icing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
