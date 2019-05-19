import React from "react"
import Disqus from "gatsby-plugin-disqus"
import { FaClock, Fa } from "react-icons/fa"

import Layout from "../layout/layout"
import BreadCrumb from "../bread-crumb/bread-crumb"
import SEO from "../../components/seo"

import "./post.scss"

const Blog = ({ post }) => (
  <Layout>
    <SEO title="Blog" />
    <BreadCrumb page="Post" />
    <div className="single__post">
      <div className="container">
        <h2>{post.markdownRemark.frontmatter.title}</h2>
        <h5>{post.markdownRemark.frontmatter.date}</h5>
        <h5>
          <FaClock />
          {post.markdownRemark.timeToRead}{" "}
          {post.markdownRemark.timeToRead > 1 ? "minutes" : "minute"}
        </h5>
        <div
          className="single__post__body"
          dangerouslySetInnerHTML={{ __html: post.markdownRemark.html }}
        />
        <div className="single__post__disqus">
          <Disqus
            identifier={"http://delecious.com" + post.markdownRemark.id}
            title={post.markdownRemark.frontmatter.title}
            url={"http://delecious.com" + post.markdownRemark.id}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default Blog
