import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
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
      <SEO title="Erik Nelson" />
      asdf
      {/* {data.data.allSitesYaml.edges.map(({ node }, index) => (
        <div key={index}>
          <a href={node.url}>
            <Img
              fluid={node.childScreenshot.screenshotFile.childImageSharp.fluid}
              alt={node.name}
              style={divStyle}
              // className={styles.shadow}
            />
          </a>
        </div>
      ))} */}
      <Logo
        topLink="https://www.google.com"
        middleLink="https://www.google.com"
        bottomLink="https://www.google.com"
        topHover="blue"
        middleHover="green"
        bottomHover="red"
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query SitesQuery {
    allSitesYaml {
      edges {
        node {
          url
          name
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
