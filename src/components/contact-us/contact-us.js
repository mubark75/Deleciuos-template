import React from "react"
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa"

export default function ContactUs() {
  return (
    <div className="contact my-5">
      <div className="container">
        <div className="contact__map">
          <div>Map</div>
        </div>
        <div className="contact__info">
          <h3
            style={{
              borderBottom: "2px solid #f42f2c",
              width: "170px",
              fontSize: "1.67rem",
              paddingBottom: "10px",
            }}
          >
            Contact info
          </h3>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="py-3"
                style={{ borderBottom: "1px solid #f42f2c", width: "80%" }}
              >
                Monday - Friday <span>09 AM - 19 PM</span>
              </div>
              <div
                className="py-3"
                style={{ borderBottom: "1px solid #f42f2c", width: "80%" }}
              >
                Saturday - Sunday <span>09 AM - 22 PM</span>
              </div>
              <div className="my-4">
                <FaEnvelope className="primary mr-2" /> delecious@example.com
              </div>
              <div className="my-4">
                <FaPhone className="primary mr-2" /> +249906185233
              </div>
              <div className="my-4">
                <FaMapMarker className="primary mr-2" /> Main Str. no 45-46, b3,
                ----, city, country
              </div>
            </div>
            <div className="col-lg-6">
              <form>
                <input className="input" type="text" placeholder="Your Name" />
                <input className="input" type="text" placeholder="Your Email" />
                <input className="input" type="text" placeholder="Subject" />
                <textarea
                  className="input"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                />
                <button className="btn-primary" style={{ float: "right" }}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
