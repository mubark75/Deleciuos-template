import React from "react"
import { Link } from "gatsby"

import "./menu.scss"

export default function Menu() {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">hi</div>
          <div className="col-md-6">
            <div className="about-menu">
              <h3 className="primary">Delecious</h3>
              <h3
                style={{
                  fontFamily: "serif",
                  fontSize: "32px",
                  letterSpacing: "2.2px",
                }}
              >
                MENU
              </h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis optio similique velit, doloremque officiis quasi,
                fugit, necessitatibus hic doloribus maiores repudiandae dolor
                tempore ullam rerum sint possimus ad nulla incidunt.
              </p>
              <Link to="/about">
                <button className="btn-primary">View The Full Menu</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
