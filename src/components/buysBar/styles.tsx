import styled from "styled-components";

export const BuysBar = styled.div`
    width: 88vw;
    max-width: 486px;
    height: 100vh;
    min-height: 100%;
    position: absolute;
    background-color: #0F52BA;
    top: 0;
    right: 0;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BuysBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 36px;
    padding: 36px 22px 60px 47px;
`;

export const BuysBarClose = styled.div`
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`;

export const BuysBarContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    padding: 10px 60px 28px 47px;
    overflow: auto;
`;

export const BuysBarFooter = styled.div`
    padding-top: 12px;
`;

export const PurchaseData = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 4.2rem;
`;

export const BuysBarFooterButton = styled.div`
    height: 10rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;