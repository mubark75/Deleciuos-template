import React from "react"
import { graphql } from "gatsby"

import Post from "../components/post/post"

const PostTemplate = ({ data: post }) => {
  return <Post post={post} />
}

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
      html
    }
  }
`

export default PostTemplate
