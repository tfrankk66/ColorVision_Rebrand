import * as React from "react"
import { createGlobalStyle } from "styled-components"
import Layout from "../components/Layout"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

// markup
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
      
      </Layout>
    </>
  )
}

export default IndexPage
