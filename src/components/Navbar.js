import React from "react";
import styled from "styled-components";

const Container = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    border-bottom: 2px solid black;
`

const Navbar = () => {
    return(
        <Container>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
            <h1>Hello world</h1>
        </Container>
    )
}

export default Navbar;
