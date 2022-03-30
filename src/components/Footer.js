import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    bottom: 0;
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    background-color: #004990;
`

const ContactInfoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: inherit;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 0;
`

const Footer = () => {
    return(
        <Container>
            <h1>&copy; 2022, ColorVision. All rights reserved.</h1>
            <ContactInfoContainer>
                <p>test</p>
                <p>test</p>
                <p>test</p>
            </ContactInfoContainer>
        </Container>
    )
}

export default Footer;