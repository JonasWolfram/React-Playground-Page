import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import LogoImg from "../../../assets/images/icons8-pferd-100.png";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center
    `};
`;

const LogoText = styled.div`
  ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `};
`;

const Image = styled.div`
  margin-left: 15px;
  width: 39px;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    margin-right: 10px;
    border-radius: 50%;
  }
  ${tw`
        h-5 
        md:h-10
    `};
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={LogoImg} alt="" />
      </Image>
      <LogoText>JWolfram.</LogoText>
    </LogoContainer>
  );
}
