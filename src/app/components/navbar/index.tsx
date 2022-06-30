import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItems";

const NavbarContainer = styled.div`
  min-height: 80px;
  ${tw`
    container-xl
    max-w-screen-2xl
    flex
    flex-row
    items-center
    justify-between
    z-10
    lg:pl-12
    lg:pr-12
    pl-6
    pr-6
  `};
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}

