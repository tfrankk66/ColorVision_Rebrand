import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components"

const Container = styled.main`
    margin: 0;
    width: 100%;
    padding: 0;
`
const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'BD Megatoya';
      src: local('BD Megatoya'), url('/fonts/BDMegatoyaRegular.woff2'), format('woff2');
  }

  body {
    font-family: 'BD Megatoya', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const Layout = ({children}) => {
    return(
        <Container>
            <GlobalStyle />
            <Helmet>
                <title>ColorVision Printing</title>
            </Helmet>
            <Navbar />
            {children}
            <Footer />
        </Container>
    )
}

export default Layout;