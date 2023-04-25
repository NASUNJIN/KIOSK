import React from "react";
import styled from "styled-components";
import MainButton from "../ui/MainButton";


function MainPage(props) {
    return (
        <div
            style={{
                // position: relative,
                // display: "flex",
                width: "1080px",
                height: "1920px",
                margin: '0',
                background: "#FDF3E8",
                // transform: 'rotate(90deg)',
                // transformOrigin: 'bottom right',
            }}
        >
            <MainButton 
                name = "대출" text = "대출"
            />
            <MainButton name = "반납" text = "반납"/>
            <MainButton name = "도서검색" text = "도서검색"/>
            <MainButton name = "도서추천" text = "도서추천"/>
            <MainButton name = "열람실" text = "열람실"/>
            <MainButton name = "회원가입" text = "회원가입"/>
            <MainButton name = "종료" text = "종료"/>

        </div>
    );
}

export default MainPage;