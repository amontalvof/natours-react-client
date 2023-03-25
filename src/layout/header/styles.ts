import styled, { keyframes } from 'styled-components';
import hero from '../../../assets/hero.jpg';
import {
    DARK_GREEN_RGBA,
    LIGHT_GREEN_RGBA,
    WHITE,
} from '../../constants/colors';

export const HeaderContainer = styled.header`
    height: 95vh;
    background-image: linear-gradient(
            to right bottom,
            ${LIGHT_GREEN_RGBA},
            ${DARK_GREEN_RGBA}
        ),
        url(${hero});
    position: relative;
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export const LogoBox = styled.div`
    position: absolute;
    top: 40px;
    left: 40px;
`;

export const Logo = styled.img`
    height: 35px;
`;

export const TextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const HeadingPrimary = styled.h1`
    color: ${WHITE};
    text-transform: uppercase;
    backface-visibility: hidden; //! this is for removing a little shaking in the tile after the animation
`;

const moveInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    80%{
        transform: translateX(10px);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`;
const moveInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    80%{
        transform: translateX(-10px);
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const HeadingPrimaryMain = styled.span`
    display: block;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 35px;
    animation-name: ${moveInLeft};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    /* animation-delay: 3s;
    animation-iteration-count: 3; */
`;

export const HeadingPrimarySub = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 17.4px;
    animation: ${moveInRight} 1s ease-out;
`;
