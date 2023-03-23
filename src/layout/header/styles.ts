import styled from 'styled-components';
import hero from '../../../assets/hero.jpg';
import { DARK_GREEN_RGBA, LIGHT_GREEN_RGBA } from '../../constants/colors';

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
