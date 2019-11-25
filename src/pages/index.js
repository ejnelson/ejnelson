import React, { useState, useCallback, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"
// eslint-disable-next-line
import raleway from "typeface-raleway"

const letters = ["E", "R", "I", "K"]

const isMobileDevice = () => {
  return (
    typeof window !== `undefined` &&
    (typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1)
  )
}
const ImageContainer = styled.div`
  font-weight: 900;
  font-family: raleway;
  font-size: 8rem;

  && button {
    position: relative;
    border: none;
    height: 8rem;
    background: transparent;
    z-index: 2;
    color: red;
    text-decoration: none;
    margin: ${props => (props.mobile ? "0px" : "0px 2rem")};
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
  top: ${props => (props.mobile ? "30%" : "0")};
  /* height: ${props => (props.mobile ? "60%" : "100%")}; */
  left: ${props => (props.mobile ? "0" : "12%")};
  width: ${props => (props.mobile ? "100%" : "76%")};
  opacity: 0;
  transition: opacity 1s ease;
  &&.active {
    opacity: 1;
  }
`
const IndexPage = data => {
  const [active, setActive] = useState("")
  const [clicked, setClicked] = useState("")
  // let mobile = useRef(true)
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    console.log("changing ref to ", isMobileDevice())
    // mobile = isMobileDevice()
    setMobile(isMobileDevice())
  }, [])

  const handleClick = useCallback(nodeUrl => {
    if (nodeUrl === clicked || !isMobileDevice()) {
      window.location = nodeUrl
    } else {
      setClicked(nodeUrl)
    }
  })

  const getImageProps = imageProps => {
    // this was a stackoverflow answer to prevent images from stretching bigger than they should be
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
  console.log("mobile device? ", mobile)
  return (
    <Layout>
      <SEO title="Erik Nelson" />
      {letters.map((letter, index) => {
        const { node } = data.data.allSitesYaml.edges[index]
        const imageProps =
          node.childScreenshot &&
          getImageProps(node.childScreenshot.screenshotFile.childImageSharp)
        return (
          <ImageContainer mobile={mobile} key={index}>
            {node.childScreenshot ? (
              <BackgroundImage
                title={node.name}
                className={
                  active === node.name || clicked === node.url ? "active" : ""
                }
                {...imageProps}
                alt={node.name}
                onClick={() => handleClick(node.url)}
                mobile={mobile}
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
                fluid(grayscale: true, maxWidth: 2048) {
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
