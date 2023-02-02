import styled from "styled-components";
import { H4, Small } from '../../stylesMain';

export const AmountButtuns = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    border: 1px solid gray;
    width: 50px;
    div {
        padding: 4px;
    }
    @media screen and (max-width: 375px) {
        width: 70px;
        height: 35px;
    }
`;

export const AmountBorder = styled.div`
    border: 1px solid gray;
    border-top: none;
    border-bottom: none;
`;

export const NumberButtonH4 = styled(H4)`
    font-size: 5px;
    line-height: 6.1px;
    @media screen and (max-width: 375px) {
        display: none;
    }
`;

export const NumberButtonSmall = styled(Small)`
    font-size: 8px;
    line-height: 9.75px;
    @media screen and (max-width: 375px) {
        font-size: 20px;
        line-height: 24.38px;
    }
`;

export const BorderNone = styled.div`
    border-right: none !important;
    border-left: none !important;
`;