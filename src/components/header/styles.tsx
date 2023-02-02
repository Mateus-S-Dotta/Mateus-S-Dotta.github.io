import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #0F52BA;
    color: white;
    padding: 28px 88px 28px 65px;
    gap: 20px;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 470px) {
        justify-content: space-between;
        padding: 10px 23px 15px 22px;
    }
`;

export const HeaderText = styled.div`
    gap: 12px;
`;

export const OpenBuysButton = styled.div`
    color: black;
    width: 9rem;
    padding: 14px 27px 13px 15px;
    background-color: white;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    @media screen and (max-width: 470px) {
        gap: 0px;
        width: 5.5rem;
        padding: 5px 15px 8px 9px;
    }
`;