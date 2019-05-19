import React from "react"
import { graphql } from "gatsby"

import Blog from "../components/blog/blog"

export default ({
  data,
  pageContext: { currentPage, isFirstPage, isLastPage, totalPages },
}) => {
  const nextPage = `/blog/${String(currentPage + 1)}`
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${String(currentPage - 1)}`

  return (
    <>
      <Blog
        posts={data.allMarkdownRemark.edges}
        currentPage={currentPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
