import React from "react"
import styled from "styled-components"
import MainButton from "./MainButton";

// ("middlebackground")
const StyledMiddleBackground = styled("middlebackground")`
    position: absolute;
    width: 940px;
    height: 1420px;
    left: 70px;
    top: 430px;
    border: none;
    border-radius: 40px;
    background: #FFFFFF;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.5);
`;

const UploadGirlImage = styled("image")`
    position: absolute;
    width: 486px;
    height: 486px;
    left: 197px;
    top: 84px;

    // filter: drop-shadow(15px 15px 30px rgba(0, 0, 0, 0.5));

    ${props => props.sex === "girl" && `

    `}
`;

{/* <img src="/component/Image/girl.png" alt="girl" />; */}

function MiddleBackground(props) {
    const {sex} = props;

    return (
        <StyledMiddleBackground>
            <UploadGirlImage sex={sex}>
                {/* require 없을 경우 이미지 깨짐  */}
                <img src={require("../Image/girl.png")} />
                {/* <img src={require("../Image/confetti.gif")} /> */}
                
            </UploadGirlImage>

        </StyledMiddleBackground>
    )
}

export default MiddleBackground;