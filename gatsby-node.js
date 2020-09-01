/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    //Products Create Pages
    const productTemplate = require.resolve(`./src/templates/productTemplate.js`)
  
    const product = await graphql(`
      {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "product"}}},
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (product.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    product.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: productTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })

    //Blogs create pages
    const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)

    const blog = await graphql(`
      {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: ASC}) {
          edges {
            next {
              frontmatter {
                title
                slug
              }
            }
            node {
              frontmatter {
                slug
              }
            }
            previous {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (blog.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    const articles = blog.data.allMarkdownRemark.edges;
    articles.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          prev: index === 0 ? null : articles[index - 1].node,
          next: index === articles.length - 1 ? null : articles[index + 1].node
        },
      })
    })

  }
