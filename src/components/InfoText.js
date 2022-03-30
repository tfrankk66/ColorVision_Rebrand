import React from "react";
import styled from "styled-components";

const InfoTextContainer = styled.div`
    display: inherit;
    width: 40%;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


const InfoText = (props) => {
    return(
            <InfoTextContainer>
                <h1>props.header</h1>
                <p>props.par</p>
            </InfoTextContainer>
    )
}

export default InfoText;