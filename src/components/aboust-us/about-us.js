import React from "react"

import aboutUsImg from "../../images/about-us.jpg"
import ourVisionImg from "../../images/our-vision.jpg"

import "./about-us.scss"

export default function AboutUs() {
  return (
    <div className="about__us">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="primary">Our History</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              facilis placeat iure exercitationem vitae. Sed qui ipsa eaque
              repudiandae repellendus est, voluptatibus, quis blanditiis iure
              quisquam velit repellat ipsum expedita quam delectus unde?
              Voluptatum minima, officiis at error, facilis, corrupti quaerat
              eligendi esse vel dolorum quia doloribus iusto rem possimus.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-res" src={aboutUsImg} alt="about us" />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <h2 className="primary">Our Vision</h2>
            <p className="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              sint a dignissimos quaerat accusamus sunt hic iure omnis voluptas
              perspiciatis commodi reprehenderit tenetur nobis assumenda, fugit
              numquam voluptate possimus optio aspernatur quidem, similique
              voluptatibus officiis impedit ad. Provident corporis velit
              molestias doloribus eius, harum, et, illo rem mollitia voluptas
              deserunt. Omnis consequatur repudiandae quas eos molestias
              assumenda, eius perspiciatis! Explicabo deleniti numquam libero.
              Maxime quos alias sed, accusantium facere magnam?
            </p>
          </div>
          <div className="col-md-6 order-md-1">
            <img className="img-res" src={ourVisionImg} alt="about us" />
          </div>
        </div>
      </div>
    </div>
  )
}
