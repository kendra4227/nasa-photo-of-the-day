import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
width:40%;
height:20%;
background-color: #F5B700 ;


`;

const StyledH1 = styled.h1`
color: #DC0073;

`;
const StyledH2 = styled.h2`
color: white;
`;

const StyledImg = styled.img `
height:100%;
width:100%;

`;

const StyledP = styled.p`
width:50%;
height:50%;

`;

const Card = (props) => {
    return (
        <StyledDiv>
            <StyledH1>{props.title}</StyledH1>
            <StyledH2>{props.date}</StyledH2>
            <StyledImg src = {props.img} alt = "potd" />
            <StyledP>{props.explanation}</StyledP>
        </StyledDiv>
    )
}

export default Card;