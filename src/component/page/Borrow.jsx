import React from "react";
import styled from "styled-components";
import TopBar from "../ui/TopBar";
import MiddleBackground from "../ui/MiddleBackground";
import MainButton from "../ui/MainButton";

function Borrow(props) {
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

            <TopBar name="main" text="대출"/>
            {/* <TopBar name="login" text="안녕하세요."/> */}
            <MiddleBackground sex="girl">
                {/* <img src={require("../Image/girl.png")} /> */}
            </MiddleBackground>

        </div>
    );
}

export default Borrow;