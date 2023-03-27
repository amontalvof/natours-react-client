import styled from 'styled-components';

interface AnchorProps {
    txColor: string;
    bgColor: string;
}

export const Anchor = styled.a<AnchorProps>`
    padding: 15px 40px;
    color: ${({ txColor }) => txColor};
    background-color: ${({ bgColor }) => bgColor};
    display: inline-block;
    :link,
    :visited {
        text-transform: uppercase;
        text-decoration: none;
    }
`;
