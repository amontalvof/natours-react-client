import styled, { keyframes } from 'styled-components';
import { BLACK_RGBA } from '../../constants/colors';

interface AnchorProps {
    txColor: string;
    bgColor: string;
    animated?: boolean;
}

const moveInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`;

export const Anchor = styled.a<AnchorProps>`
    & {
        padding: 15px 40px;
        color: ${({ txColor }) => txColor};
        background-color: ${({ bgColor }) => bgColor};
        display: inline-block;
        border-radius: 100px;
        transition: all 0.2s;
        position: relative;
        text-transform: uppercase;
        text-decoration: none;

        animation: ${({ animated }) => animated && moveInBottom} 0.5s ease-out
            0.75s;
        animation-fill-mode: backwards;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px ${BLACK_RGBA};
    }
    &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px ${BLACK_RGBA};
    }
    &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background-color: ${({ bgColor }) => bgColor};
        transition: all 0.4s;
    }
    &:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
`;
