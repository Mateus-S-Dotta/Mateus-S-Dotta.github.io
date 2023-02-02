import styled from "styled-components";

export const Cart = styled.div`
    position: relative;
    border-radius: 8px;
    background-color: white;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    display: flex;
    gap: 9px;
    justify-content: space-between;
    color: black;
    h4 {
        font-size: 13px;
        line-height: 17px;
    }
    img {
        height: auto;
        max-width: 90px;
        object-fit: contain;
        border-radius: 8px;
    }
    h5 {
        color: black;
    }
    @media screen and (max-width: 375px) {
        height: 220px;
        h5 {
            background-color: #373737;
            border-radius: 5px;
            color: white;
            padding: 8px 4px;
        }
        h4 {
            font-size: 16px;
            line-height: 19px;
            padding-left: 14px;
            padding-right: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        img {
            height: 131px;
            max-width: auto;
        }
    }
`;

export const CartFirst = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 375px) {
        flex-direction: column;
    }
`;

export const CartSecund = styled.div`
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 190px;
    @media screen and (max-width: 375px) {
        flex-direction: column;
        padding-bottom: 22px;
        padding-left: 16px;
    }
`;

export const CloseButtonCart = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    color: white;
    background-color: black;
    border-radius: 50%;
    cursor: pointer;
    h4 {
        width: 19px;
        text-align: center;
    }
    @media screen and (max-width: 375px) {
        position: absolute;
        top: 10px;
        right: 14px;
        color: black;
        background-color: white;
        h4 {
            font-family: 'Montserrat', sans-serif;
            font-size: 42px;
            font-weight: 400;
            line-height: 17px;
            text-align: center;
            padding: 0;
            overflow: visible;
        }
    }
`;
