import React, { memo } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Layout = ({ children }) => {
  return <CenterContainer>{children}</CenterContainer>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
