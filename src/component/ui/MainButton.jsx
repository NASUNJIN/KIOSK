import React from "react";
import styled from "styled-components";

const StyledMainButton = styled.button`
    position: absolute;
    width: 455px;
    height: 194px;
    background: #D2BCA5;
    border-radius: 30px;
    border: none;
    filter: drop-shadow(15px 15px 30px rgba(0, 0, 0, 0.5));
    // 폰트
    font-family: 'BM Jua';
    font-style: normal;
    font-weight: 400;
    color: #000000;
    // 노안
    // font-size: 128px;  
    // line-height: 132px;
    // 평균
    font-size: 100px;  
    line-height: 103px;

    ${props => props.eyes === "노안" && `
        font-size: 128px;  
        line-height: 132px;
    `}
    
    ${props => props.name === "대출" && `
        left: 70px;
        top: 583px;
    `}
    ${props => props.name === "반납" && `
        left: 555px;
        top: 583px;
    `}
    ${props => props.name === "도서검색" && `
        left: 70px;
        top: 833px;
    `}
    ${props => props.name === "도서추천" && `
        left: 555px;
        top: 833px;
    `}
    ${props => props.name === "열람실" && `
        left: 70px;
        top: 1083px;
    `}
    ${props => props.name === "회원가입" && `
        left: 555px;
        top: 1083px;
    `}
    ${props => props.name === "종료" && `
        position: absolute;
        width: 455px;
        height: 194px;
        left: 555px;
        top: 1363px;
        background: #6B605B;
        border-radius: 30px;

        font-weight: 400;
        letter-spacing: 0em;
        color: #FFFFFF;
    `}
    ${props => props.name === "예" && `
        position: absolute;
        width: 385px;
        height: 190px;
        left: 130px;
        top: 1485px;
    `}
`;



function MainButton(props) {
    const { onClick, name, eyes, text } = props;

    return (
        // text를 명시하지 않았을 경우 "button"으로 작성
        <StyledMainButton name ={name} eyes={eyes} onClick={onClick}>
            {text || "button"}
        </StyledMainButton>
    )
}

export default MainButton;