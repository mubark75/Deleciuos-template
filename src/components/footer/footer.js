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
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus fugit accusantium laboriosam unde tempore eligendi
                vitae laborum aut, quae temporibus nihil at, officiis sed
                similique accusamus aliquid suscipit, deleniti vel.
              </p>
              <ul>
                <li>
                  <Link to="/">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5 footer__blog">
              <h3>Recent Blog</h3>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5 footer__question">
              <h3>Have A Question?</h3>
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
