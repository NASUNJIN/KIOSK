import React from "react"
import styled from "styled-components"

const StyledTopBar = styled("topbar")`
    position: absolute;
    width: 940px;
    height: 290px;
    left: 70px;
    top: 70px;
    border: none;
    border-radius: 40px;
    background: #FFFFFF;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
`;

const StyledTopBarText = styled("toptext")`
    position: absolute;
    font-family: 'BM Jua';
    font-style: normal;

    ${props => props.name === "main" && `
        font-size: 150px;
        font-weight: 400;
        line-height: 155px;
        letter-spacing: 0em;
        text-align: center;
        Vertical-align: Top

        height: 155px;
        width: 241px;
        //left: 419px;
        left: calc(50% - 241px/2 - 0.5px);
        top: 70px;
        border-radius: nullpx;
    
        color: #000000;
    `}
    ${props => props.name === "login" && `
        font-weight: 400;
        font-size: 70px;
        line-height: 72px;
        text-align: center;
        // vertical-align: Top

        color: #000000;
        left: 337px;
        top: 67px;
        border-radius: nullpx;

    `}
    ${props => props.name === "people" && `
        font-size: 128px;  
        line-height: 132px;
    `}
`;

function TopBar(props) {
    const {name, text} = props;
    
    return (
        <StyledTopBar>
            <StyledTopBarText name={name}>
                {text || "NULL"}
            </StyledTopBarText>
        </StyledTopBar>
    )
}

export default TopBar;