import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;

export const H1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-weight: 600;
    line-height: 19px;
    @media screen and(max-width: 375px) {
        font-size: 3.2rem;
        line-height: 19px;
    }
`;

export const H2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 2.7rem;
    font-weight: 700;
    line-height: 33px;
`;

export const H3 = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 15px;
`;

export const H4 = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
`;

export const H5 = styled.h5`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
`;

export const H6 = styled.h6`
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
`;

export const Button = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
`;

export const Span = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 15px;
`;

export const Strong = styled.strong`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 22px;
    @media screen and(max-width: 375px) {
        font-size: 12px;
        line-height: 15px;
    }
`;

export const Small = styled.small`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 15px;
`;

export const P = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 300;
    line-height: 19px;
    @media screen and(max-width: 375px) {
        font-size: 1.6rem;
        line-height: 19px;
    }
`;