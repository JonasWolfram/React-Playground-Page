import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import HorseImg from "../../../../../../MERN/my-app-mern/src/assets/images/purepng.com-white-horse-jumpinghorsejumpingwhite-horsemountknighthackneyprad-481520976081ixkeq.png";
import BlobImg from "../../../../../../MERN/my-app-mern/src/assets/images/blob.svg";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 350px;
  margin-top: 6em;
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        lg:pl-12
        lg:pr-12
        pl-6
        pr-3
    `}
`;

const LeftSectionContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const RightSectionContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
  ${tw`
        font-black
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-black
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;

const Description = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`;

const BlobContainer = styled.div`
  width: 40m;
  height: 30em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-20deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 60em;
    max-height: 8em;
    right: -12em;
    top: -21em;
    transform: rotate(-26deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 40em;
    max-height: 25em;
    right: -7em;
    top: -12em;
    transform: rotate(-35deg);
  }
`;

const StandaloneHorse = styled.div`
  width: auto;
  height: 25em;
  right: -4rem;
  top: -7rem;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.s}) {
    width: auto;
    height: 19em;
    right: -7rem;
    top: -7rem;

    img {
      width: 100%;
    }
  }

  @media (min-width: ${SCREENS.sm}) {
    width: auto;
    height: 19em;
    right: -7rem;
    top: -7rem;

    img {
      width: 100%;
    }
  }

  @media (min-width: ${SCREENS.lg}) {
    width: auto;
    height: 25em;
    right: -12rem;
    top: -7rem;

    img {
      width: 100%;
    }
  }

  @media (min-width: ${SCREENS.xl}) {
    width: auto;
    height: 25em;
    right: -11rem;
    top: -7rem;

    img {
      width: 100%;
    }
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        mt-3
    `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftSectionContainer>
        <Slogan>Rent the best Jonas very cheap!</Slogan>
        <Description>
          Always choose the best Pony Jonas from our local stores or order it
          remotly at the besrt price for you and get the best quality Pony Jonas
          for as long as you like
        </Description>
        <ButtonsContainer>
          <Button text="Rent a Pony" />
          <Button theme="filled" text="Sell a Pony" />
        </ButtonsContainer>
      </LeftSectionContainer>
      <RightSectionContainer>
        <BlobContainer>
          <img src={BlobImg} alt="" />
        </BlobContainer>
        <StandaloneHorse>
          <img src={HorseImg} alt="" />
        </StandaloneHorse>
      </RightSectionContainer>
    </TopSectionContainer>
  );
}
