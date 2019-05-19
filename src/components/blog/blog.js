import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import BreadCrumb from "../bread-crumb/bread-crumb"
import SEO from "../../components/seo"

import Img from "../../images/banner.jpg"

import "./blog.scss"

const Blog = ({
  posts,
  currentPage,
  isFirstPage,
  isLastPage,
  totalPages,
  nextPage,
  prevPage,
}) => (
  <Layout>
    <SEO title="Blog" />
    <BreadCrumb page="Blog" />
    <div className="blog">
      <div className="container">
        <div className="posts">
          <div className="row">
            {posts.map(({ node: post }) => (
              <div key={post.id} className="col-lg-4 col-sm-6 post">
                <div className="post__img">
                  <img
                    className="img-res"
                    src={Img}
                    alt={post.frontmatter.title}
                  />
                </div>
                <div className="post__date">{post.frontmatter.date}</div>
                <h4 className="post__title">
                  <Link to={`posts/${post.id}`}>{post.frontmatter.title}</Link>
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="blog__pagination">
              {!isFirstPage && (
                <Link to={prevPage} rel="prev">
                  <button>Prev page</button>
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, index) => (
                <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
                  <button className={index + 1 === currentPage ? "active" : ""}>
                    {index + 1}
                  </button>
                </Link>
              ))}

              {!isLastPage && (
                <Link to={nextPage} rel="next">
                  <button>Next page</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Blog
