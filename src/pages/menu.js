import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import BreadCrumb from "../components/bread-crumb/bread-crumb"
import SEO from "../components/seo"

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <BreadCrumb page="Menu" />
    <h1>Hi from the Menu</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Menu
