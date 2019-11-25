import React, { useState, useCallback } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
import exo from "typeface-exo" // eslint-disable-line

const letters = ["E", "R", "I", "K"]

const isMobileDevice = () => {
  return (
    typeof window !== `undefined` &&
    (typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1)
  )
}
const ImageContainer = styled.div`
  font-weight: bold;
  font-family: exo;
  font-size: 8rem;

  && button {
    position: relative;
    border: none;
    height: 8rem;
    background: transparent;
    z-index: 2;
    color: red;
    text-decoration: none;
    margin: ${isMobileDevice() ? "0px" : "0px 2rem"};
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`
const ErrorSpan = styled.span`
  color: red;
  font-family: exo;
  font-size: 2rem;
  padding: 3rem;
  position: fixed !important;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  &&.active {
    opacity: 1;
  }
`
const BackgroundImage = styled(Img)`
  position: fixed !important;
  top: ${isMobileDevice() ? "30%" : "0"};
  /* height: ${isMobileDevice() ? "60%" : "100%"}; */
  left: ${isMobileDevice() ? "0" : "12%"};
  width: ${isMobileDevice() ? "100%" : "76%"};
  opacity: 0;
  transition: opacity 1s ease;
  &&.active {
    opacity: 1;
  }
`
const IndexPage = data => {
  const [active, setActive] = useState("")
  const [clicked, setClicked] = useState("")

  const handleClick = useCallback(nodeUrl => {
    if (nodeUrl === clicked || !isMobileDevice()) {
      window.location = nodeUrl
    } else {
      setClicked(nodeUrl)
    }
  })

  const getImageProps = imageProps => {
    let normalizedProps = imageProps

    if (imageProps.fluid && imageProps.fluid.presentationWidth) {
      normalizedProps = {
        ...imageProps,
        style: {
          ...(imageProps.style || {}),
          maxWidth: imageProps.fluid.presentationWidth,
          margin: "0 auto", // Used to center the image
        },
      }
    }
    return { ...normalizedProps }
  }
  console.log("data from queries: ", data)
  console.log("active element: ", active)
  console.log("mobile device? ", isMobileDevice())
  return (
    <Layout>
      <SEO title="Erik Nelson" />

      {letters.map((letter, index) => {
        const { node } = data.data.allSitesYaml.edges[index]
        const imageProps =
          node.childScreenshot &&
          getImageProps(node.childScreenshot.screenshotFile.childImageSharp)
        return (
          <ImageContainer key={index}>
            {node.childScreenshot ? (
              <BackgroundImage
                title={node.name}
                className={
                  active === node.name || clicked === node.url ? "active" : ""
                }
                {...imageProps}
                alt={node.name}
                onClick={() => handleClick(node.url)}
              />
            ) : (
              <ErrorSpan
                className={
                  active === node.name || clicked === node.url ? "active" : ""
                }
              >
                No fancy screenshot here: click to go to {node.url}
              </ErrorSpan>
            )}
            <button
              onMouseEnter={() => setActive(node.name)}
              onClick={() => handleClick(node.url)}
              onMouseLeave={() => setActive("")}
            >
              {letter}
            </button>
          </ImageContainer>
        )
      })}
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
                fluid(maxWidth: 2048) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`
