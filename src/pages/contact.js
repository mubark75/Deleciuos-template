import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import BreadCrumb from "../components/bread-crumb/bread-crumb"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <BreadCrumb page="Contact" />
    <h1>Hi from the Contact</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
