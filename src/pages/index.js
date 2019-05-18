import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Header from "../components/header/header"
import OurStory from "../components/our-story/our-story"
import Services from "../components/services/services"
import Menu from "../components/menu/menu"
import OverLay from "../components/over-lay/over-lay"
import SEO from "../components/seo"

import Image from "../components/image"
import bannerImg from "../images/banner.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <OurStory />
    <Services />
    <Menu />

    <OverLay alpha={2}>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          padding: "60px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 className="primary" style={{ fontSize: "2rem" }}>
            DELECIUOS
          </h2>
          <p className="lead" style={{ fontSize: "1.2rem", color: "#fff" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            quam obcaecati cum expedita rem at dolorum, cumque provident
            praesentium tenetur ut quis aliquam temporibus consequuntur
            explicabo dolores? Iure, necessitatibus optio?
          </p>
        </div>
      </div>
    </OverLay>
  </Layout>
)

export default IndexPage
