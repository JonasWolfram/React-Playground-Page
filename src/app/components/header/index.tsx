import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";

import HeaderWideImage from "../../../assets/images/rick-goltowski-WOg3r4AHa0U-unsplash.jpg"

const HeaderContainer = styled.div`
${tw`
flex
md:w-full
md:h-full
`};
`;

const Image = styled.div`
${tw`
md:w-full
md:h-full
`}
`;

export function Header() {
    return <HeaderContainer>
        <Image>
            <img src={ HeaderWideImage } alt=""/>
        </Image>
    </HeaderContainer>
}