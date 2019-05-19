import React, { Component } from "react"
import { Link } from "gatsby"

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMap,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"

import "./footer.scss"

export class footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-5 footer__about">
              <h3 style={{ fontSize: "1.3rem" }}>About Us</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus fugit accusantium laboriosam unde tempore eligendi
                vitae laborum aut, quae temporibus nihil at, officiis sed
                similique accusamus aliquid suscipit, deleniti vel.
              </p>
              <ul>
                <li
                  className="d-inline-block mr-4"
                  style={{ fontSize: "35px" }}
                >
                  <Link style={{ padding: "5px" }} to="/">
                    <FaFacebook style={{ color: "#fff" }} />
                  </Link>
                </li>
                <li
                  className="d-inline-block mr-4"
                  style={{ fontSize: "35px" }}
                >
                  <Link style={{ padding: "5px" }} to="/">
                    <FaTwitter style={{ color: "#fff" }} />
                  </Link>
                </li>
                <li
                  className="d-inline-block mr-4"
                  style={{ fontSize: "35px" }}
                >
                  <Link style={{ padding: "5px" }} to="/">
                    <FaInstagram style={{ color: "#fff" }} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5 footer__blog">
              <h3 style={{ fontSize: "1.3rem" }}>Recent Blog</h3>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5 footer__question">
              <h3 style={{ fontSize: "1.3rem" }}>Have A Question?</h3>
              <span>
                <FaMap />
                203 Fake St. Mountain Viclass="footer_contact_"ew, San
                Francisco, California, USA
              </span>
              <span>
                <FaPhone />
                +249 906185233
              </span>
              <span>
                <FaEnvelope />
                mubark750@gmail.com
              </span>
            </div>
          </div>
        </div>
        <hr className="bg-primary" />
        <div className="container">
          <p style={{ textAlign: "center" }}>
            Copyright ©2019 All rights reserved
          </p>
        </div>
      </footer>
    )
  }
}

export default footer
