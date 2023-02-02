import styled from "styled-components";

export const CardMain = styled.div`
    width: 80vw;
    max-width: 22rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    img {
        max-height: 170px;
        width: auto;
        object-fit: contain;
        border-radius: 8px;
    }
    button {
        width: 100%;
        color: white;
        background-color: #0F52BA;
        border: none;
        display: flex;
        justify-content: center;
        padding: 9px;
        border-radius: 0px 0px 8px 8px;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
    @media screen and (max-width: 375px) {
        img {
            max-height: 195px;
        }
    }
`;

export const CardMainText = styled.div`
    padding-left: 14px;
    padding-right: 12px;
    h4 {
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
    h5 {
        background-color: #373737;
        border-radius: 5px;
        color: white;
        padding: 8px 4px;
    }
    h6 {
        max-height: 36px;
        margin-bottom: 12px;
    }
    @media screen and (max-width: 375px) {
        h6 {
            max-height: none;
        }
    }
`;

export const CardMainNamePrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
`;