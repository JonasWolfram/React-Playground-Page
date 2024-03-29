import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHorse,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
    `}
`;

const Title = styled.h2`
  ${tw`
        text-xl
        lg:text-4xl
        text-black
        font-extrabold
    `}
`;

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `}
`;

const StepContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-16
      md:w-96
      items-center
      transition-colors
      hover:text-red-500
    `}
`;

const Step = styled.div`
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `}
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;

const StepDescription = styled.p`
  ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-500
    `}
`;

const StepIcon = styled.span`
  ${tw`
       text-red-500
       text-3xl 
    `}
`;

export function BookingSteps() {
  return (
    <Container>
      <Title>Choose your Stuff</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Choose your date to pick up your Pony-Jonas!
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faHorse} />
            </StepIcon>
          </Step>
          <StepTitle>Pick your Pony</StepTitle>
          <StepDescription>
            Select from the finest Horses that are available for rent.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Location to rent your Jonas
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
