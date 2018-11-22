import React from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import { ITheme } from "../@types";

const theme = {
    red: "#FF0000",
    black: "#393939",
    grey: "#3A3A3A",
    lightGrey: "#E1E1E1",
    offWhite: "#EDEDED",
    maxWidth: "1200px",
    boxShadow: "0 12px 24px 0 rgba(0,0,0, 0.09)",
};

// tslint:disable-next-line:no-unused-expression
injectGlobal`
    @font-face {
        font-family: "Radnika Next";
        src: url("/static/radnikanext-medium-webfont.woff2")
        format("woff2");
        font-weight: normal;
        font-style: normal;
    }

    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before *:after {
        box-sizing: inherit;
    }

    body {
        font-family: "Radnika Next";
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }
`;

const Wrapper = styled.div`
    background: white;
    color: ${(props: ITheme) => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${(props: ITheme) => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

const Page: React.SFC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Wrapper>
            <Meta />
            <Header />
            <Inner>
                {children}
            </Inner>
        </Wrapper>
    </ThemeProvider>
);

export default Page;
