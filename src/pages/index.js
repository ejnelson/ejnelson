import React, { useState } from "react"

import Layout from "../components/layout"
// import Logo from "../components/logo"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import exo from "typeface-exo"

const letters = ["E", "R", "I", "K"]

const ImageContainer = styled.div`
  color: red;
  font-weight: bold;
  font-family: exo;
  font-size: 8em;

  && a {
    position: relative;
    z-index: 2;
    text-decoration: none;
    margin: 1rem;
    &:visited {
      color: red;
    }
  }
`

const BackgroundImage = styled(Img)`
  position: fixed !important;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 1s ease;
  &&.hovered {
    opacity: 1;
  }
`
const IndexPage = data => {
  const [hovered, setHovered] = useState("")
  console.log(data)
  console.log(hovered)
  return (
    <Layout>
      <SEO title="Erik Nelson" />
      {data.data.allSitesYaml.edges.map(({ node }, index) => (
        <>
          {node.childScreenshot && (
            <ImageContainer key={node.name}>
              <BackgroundImage
                className={hovered === node.name ? "hovered" : ""}
                fluid={node.childScreenshot.screenshotFile.childImageSharp.fluid}
                alt={node.name}
              />
              <a onMouseEnter={() => setHovered(node.name)} href={node.url} onMouseLeave={() => setHovered("")}>
                {letters[index]}
              </a>
            </ImageContainer>
          )}
        </>
      ))}
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
                fluid(maxWidth: 2700) {
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
