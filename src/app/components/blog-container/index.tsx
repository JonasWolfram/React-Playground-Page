import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import ImgCardOne from "../../../assets/images/marcel.jpeg";

const FullWidth = styled.div`
  ${tw`
w-full
md:flex
md:justify-center
bg-gray-200
`}
`;

const CardContainer = styled.div`
  background-color: #80d39b;
  ${tw`
container-xl
md:flex
md:justify-center
justify-center
md:space-x-10

md:py-10
`}
`;

const CardMain = styled.div`
  ${tw` 
bg-white
w-4/12
rounded-xl 
shadow-lg 
hover:shadow-xl 
transform 
hover:scale-105 
transition 
duration-500 
mx-auto 
md:mx-0
overflow-hidden
`}
`;

const CardImage = styled.div`
  ${tw`
w-full
h-48
overflow-hidden
`}

  img {
    width: 100%;
    height: auto;
  }
`;

const CardText = styled.div`
  background-color: #100007;
  ${tw`
pt-4
text-white
text-center
`}
`;

const CardHeadline = styled.h1`
  ${tw`
    text-xl
    font-bold
`}
`;

const CardParagraph = styled.p`
  ${tw`
    mt-4
    text-white
`}
`;

const CardButton = styled.button`
  ${tw`
mt-8
mb-4
py-1
px-6
rounded-full
bg-gray-700
text-white
tracking-widest
hover:bg-gray-500
transition 
duration-200
`}
`;

export function CardStart() {
  return (
    <FullWidth>
      <CardContainer>
        <CardMain>
          <CardImage>
            <img src={ImgCardOne} alt="" />
          </CardImage>
          <CardText>
            <CardHeadline>Form w./ Marcel Dettmann</CardHeadline>
            <CardParagraph>
              Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor
              sit amet, consectetur adip
            </CardParagraph>
            <CardButton>mehr...</CardButton>
          </CardText>
        </CardMain>
        <CardMain>
          <CardImage>
            <img src={ImgCardOne} alt="" />
          </CardImage>
          <CardText>
            <CardHeadline>Test</CardHeadline>
            <CardParagraph>
              Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor
              sit amet, consectetur adip
            </CardParagraph>
            <CardButton>mehr...</CardButton>
          </CardText>
        </CardMain>
        <CardMain>
          <CardImage>
            <img src={ImgCardOne} alt="" />
          </CardImage>
          <CardText>
            <CardHeadline>Test</CardHeadline>
            <CardParagraph>
              Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor
              sit amet, consectetur adip
            </CardParagraph>
            <CardButton>mehr...</CardButton>
          </CardText>
        </CardMain>
      </CardContainer>
    </FullWidth>
  );
}
