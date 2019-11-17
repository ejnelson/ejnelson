import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LogoBar = styled.a`
  display: flex;
  align-self: ${props =>
    props.top ? "flex-start" : props.bottom ? "flex-end" : "center"};
  border-radius: 5px;
  width: 16rem;
  height: 6rem;
  margin: 0.5rem;
  background: black;

  &:hover {
    background: ${props => props.hover};
  }
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
`

const Logo = data => {
  return (
    <>
      <LogoContainer>
        sdkj
        {data.allSitesYaml.edges.map(({ node }, index) => (
          <div key={index}>
            <a href={node.url}>
              <Img
                resolutions={
                  node.childScreenshot.screenshotFile.childImageSharp
                    .resolutions
                }
                alt={node.name}
              />
            </a>
          </div>
        ))} */}
        <LogoBar top href={props.topLink} hover={props.topHover}></LogoBar>
        <LogoBar
          center
          href={props.middleLink}
          hover={props.middleHover}
        ></LogoBar>
        <LogoBar
          bottom
          href={props.bottomLink}
          hover={props.bottomHover}
        ></LogoBar>
      </LogoContainer>
    </>
  )
}

Logo.propTypes = {}

Logo.defaultProps = {}

export default Logo

// export const query = graphql`
//   query SitesQuery {
//     allSitesYaml {
//       edges {
//         node {
//           url
//           name
//           childScreenshot {
//             screenshotFile {
//               childImageSharp {
//                 resolutions(width: 384, height: 288) {
//                   ...GatsbyImageSharpResolutions
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
