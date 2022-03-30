import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { StaticImage } from "gatsby-plugin-image"

const Container = styled.header`
    width: 100%;
    max-height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
`

const ImageDiv = styled.div`
    width: 15%;
    margin-left: 1em;
`

const LinkDiv = styled.div`
    width: 40%;
    height: 100%;
    display: inherit;
    flex-direction: row;
    justify-content: space-between;
`

const Navbar = () => {
    return(
        <Container>
            <ImageDiv>
                <StaticImage src="../images/CVNewLogo_Final.png" alt="ColorVision Logo" />
            </ImageDiv>
            <LinkDiv>
                <NavLink name="Home" page=""/>
                <NavLink name="Contact" page="contact"/>
                <NavLink name="About Us" page="aboutus"/>
                <NavLink name="Our Work" page="ourwork"/>
            </LinkDiv>
        </Container>
    )
}

export default Navbar;
