import React from "react"
import { Link } from "gatsby"

import "./our-story.scss"

import ourStoryImg from "../../images/our-story.jpg"
import playImg from "../../images/play.png"

export default function OurStory() {
  return (
    <div className="our-story">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="about-us">
              <h3 className="primary">Delecious</h3>
              <h3
                style={{
                  fontFamily: "serif",
                  fontSize: "32px",
                  letterSpacing: "2.2px",
                }}
              >
                Our Story
              </h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis optio similique velit, doloremque officiis quasi,
                fugit, necessitatibus hic doloribus maiores repudiandae dolor
                tempore ullam rerum sint possimus ad nulla incidunt.
              </p>
              <Link to="/about">
                <button className="btn-primary">About Us</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="video"
              style={{
                backgroundImage: `url(${ourStoryImg})`,
                backgroundSize: "cover",
              }}
            >
              <div>
                <img className="img-res" src={playImg} alt="our story" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
