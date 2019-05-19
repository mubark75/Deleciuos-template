import React from "react"

import Layout from "../components/layout/layout"
import BreadCrumb from "../components/bread-crumb/bread-crumb"
import AboutUs from "../components/aboust-us/about-us"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <BreadCrumb page="About" />
    <AboutUs />
  </Layout>
)

export default About
