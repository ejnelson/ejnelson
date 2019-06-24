import React from "react"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Erik Nelson" />
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

export default IndexPage
