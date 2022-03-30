import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const LinkContainer = styled(Link)`
    text-decoration: none;
    color: red;

    &:after {
        content: '';
        position: fixed;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        transform: scaleX(0);
        background-color: blue;
        transition: transform 0.3s;
    }

    &:hover {
        &:after {
            transform: scaleX(1);    
        }
    }
`

const NavLink = (props) => {
    return(
        <LinkContainer to={"/" + props.page}>
            {props.name}
        </LinkContainer>
    )
}

export default NavLink;
