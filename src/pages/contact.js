import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import BreadCrumb from "../components/bread-crumb/bread-crumb"
import ContactUs from "../components/contact-us/contact-us"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <BreadCrumb page="Contact Us" />
    <ContactUs />
  </Layout>
)

export default Contact
