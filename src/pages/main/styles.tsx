import React from "react";
import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    min-height: calc(100vh - 105px - 31px);
    background-color: #E5E5E5;
    padding: 2.4rem 2.3rem;
    display: flex;
    align-items: center;
    @media screen and(max-width: 455px) {
        min-height: calc(100vh - 14.4rem - 3.1rem);
    }
`;

export const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap:23px;
    max-width: 950px;
    margin: auto;
`;