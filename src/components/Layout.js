import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.main`
    margin: 0;
    width: 100%;
    padding: 0;
`

const Layout = ({children}) => {
    return(
        <Container>
            <Navbar />
            {children}
        </Container>
    )
}

export default Layout;