import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import BreadCrumb from "../components/bread-crumb/bread-crumb"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <BreadCrumb page="Blog" />
    <h1>Hi from the Blog</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Blog
