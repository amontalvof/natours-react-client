import styled from 'styled-components';
import { BLACK_RGBA } from '../../constants/colors';

interface AnchorProps {
    txColor: string;
    bgColor: string;
}

export const Anchor = styled.a<AnchorProps>`
    padding: 15px 40px;
    color: ${({ txColor }) => txColor};
    background-color: ${({ bgColor }) => bgColor};
    display: inline-block;
    border-radius: 100px;
    transition: all 0.2s;
    :link,
    :visited {
        text-transform: uppercase;
        text-decoration: none;
    }
    :hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px ${BLACK_RGBA};
    }
    :active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px ${BLACK_RGBA};
    }
`;
