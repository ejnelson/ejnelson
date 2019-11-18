import React from "react"

import Layout from "../components/layout"
// import Logo from "../components/logo"
// import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"

var divStyle = {
  color: "white",
  WebkitTransition: "all", // note the capital 'W' here
  width: 500,
  height: 500,
}
const IndexPage = data => {
  console.log(data)
  return (
    <Layout>
      {/* <SEO title="Erik Nelson" /> */}
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
