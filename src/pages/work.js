import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

//
const IndexPage = data => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Erik Nelson" />
      <h1>this is the page that i will display my work</h1>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query work {
    allSitesYaml {
      edges {
        node {
          childScreenshot {
            screenshotFile {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
