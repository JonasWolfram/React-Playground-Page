import React from 'react';
import styled, {css} from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive"
import menuStyles from './menuStyles'; 

 
const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any}>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    transform 
    duration-500
    ease-in-out
    hover:scale-110
    hover:text-gray-700
    hover:-translate-y-1
  `};

  ${({ menu }) => 
    menu && 
    css` 
      ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
      `};
  `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="/">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="/portfolio">Veranstaltungen</a>
          </NavItem>
          <NavItem menu>
            <a href="/projects">Jobs</a>
          </NavItem>
          <NavItem menu>
            <a href="/contact">Kontakt</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
      

    return (
    <ListContainer>
        <NavItem>
            <a id="home" className="menu-item" href="/">Home</a>
        </NavItem>
        <NavItem>
            <a id="portfolio" className="menu-item" href="/portfolio">Veranstaltungen</a>
        </NavItem>
        <NavItem>
            <a id="projects" className="menu-item" href="/projects">Jobs</a>
        </NavItem>
        <NavItem>
            <a id="contact" className="menu-item" href="/contact">Kontakt</a>
        </NavItem>
    </ListContainer>)
}