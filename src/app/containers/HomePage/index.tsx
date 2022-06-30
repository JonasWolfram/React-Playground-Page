import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
// import { Header } from "../../components/header";
// import { CardStart } from "../../components/blog-container";
import { TopSection } from "../../containers/HomePage/topSection";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "./bookingSteps";
import { Marginer } from "../../components/marginer";

const PageContainer = styled.div`
  ${tw` 
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="4em" />
      <BookingSteps />
      {/* <Header /> */}
      {/* <CardStart /> */}
    </PageContainer>
  );
}
