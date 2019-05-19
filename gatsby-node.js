const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const PostTemplate = path.resolve("./src/templates/post-template.js")
const BlogTemplate = path.resolve("./src/templates/blog-template.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  // Blog Posts
  const posts = result.data.allMarkdownRemark.edges

  // Creating Post pages
  posts.forEach(({ node: post }) => {
    createPage({
      path: `posts/${post.id}`,
      component: PostTemplate,
      context: {
        id: post.id,
      },
    })
  })

  // Creating Blog Page
  const postsPerPage = 2
  const totalPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: totalPages }).forEach((_, index) => {
    const currentPage = index + 1
    const isFirstPage = index === 0
    const isLastPage = currentPage === totalPages

    createPage({
      path: isFirstPage ? "/blog" : `/blog/${currentPage}`,
      component: BlogTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        isFirstPage,
        isLastPage,
        currentPage,
        totalPages,
      },
    })
  })
}
