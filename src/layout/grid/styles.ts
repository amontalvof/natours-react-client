import styled, { css } from "styled-components";

const gridWidth = "114rem";
const gutterVertical = "3rem";
const gutterHorizontal = "6rem";

export const Row = styled.div`
    max-width: ${gridWidth};
    background-color: #eee;
    margin: 0 auto;
    
    &::after { //! clearfix
        content: "";
        display: table;
        clear: both;
    }

    &:not(:last-child){
        margin-bottom: ${gutterVertical};
    }
`;

const CommonStyles = css`
    float: left;
    background-color: crimson;

    &:not(:last-child){
        margin-right: ${gutterHorizontal};
    }
`;

export const Col1of2 = styled.div`
    width: calc((100% - ${gutterHorizontal}) / 2);
    ${CommonStyles}
`;

export const Col1of3 = styled.div`
    width: calc((100% - 2 * ${gutterHorizontal}) / 3);
    ${CommonStyles}
`;

export const Col2of3 = styled.div`
width: calc((2 * (100% - 2 * ${gutterHorizontal}) / 3) + ${gutterHorizontal});
    ${CommonStyles}
`;

export const Col1of4 = styled.div`
    width: calc((100% - 3 * ${gutterHorizontal}) / 4);
    ${CommonStyles}
`;

export const Col2of4 = styled.div`
    width: calc((2 * (100% - 3 * ${gutterHorizontal}) / 4) + ${gutterHorizontal});
    ${CommonStyles}
`;

export const Col3of4 = styled.div`
    width: calc((3 * (100% - 3 * ${gutterHorizontal}) / 4) + 2 * ${gutterHorizontal});
    ${CommonStyles}
`;