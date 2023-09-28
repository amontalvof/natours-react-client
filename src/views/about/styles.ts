import styled from "styled-components";
import { BLACK_RGBA, DARK_GREEN, LIGHT_GRAY, LIGHT_GREEN } from "../../constants/colors";

export const SectionAbout = styled.section`
    background-color: ${LIGHT_GRAY};
    padding: 25rem 0;
    margin-top: -20vh;
`;

export const HeadingSecondary = styled.h2`
    font-size: 3.5 rem;
    text-transform: uppercase;
    font-weight: 700;
    background-image: linear-gradient(to right, ${LIGHT_GREEN}, ${DARK_GREEN});
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: 0.2rem;
    transition: all 0.2s;

    &:hover{
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: 0.5rem 1rem 2rem ${BLACK_RGBA};
    }
`;