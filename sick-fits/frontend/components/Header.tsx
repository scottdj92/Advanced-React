import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "./Nav";
import { ITheme } from "../@types";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    z-index: 2;
    transform: skew(-7deg);

    a {
        padding: 0.5rem 1rem;
        background: ${(props: ITheme) => props.theme.red};
        text-transform: uppercase;
        text-decoration: none;
    }

    @media screen and (max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.header`
    .bar {
        border-bottom: 10px solid ${(props: ITheme) => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;

        @media screen and (max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }

    .sub-bar {
        display: grid;
        grid-template-columns: 1fr auto;
        border-bottom: 1px solid ${(props: ITheme) => props.theme.lightGrey};
    }
`;

const Header: React.SFC = () => (
    <StyledHeader>
        <div className="bar">
            <Logo>
                <Link href="/">
                    <a href="">Sick Fits</a>
                </Link>
            </Logo>
            <Nav />
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <div>Cart</div>
    </StyledHeader>
);

export default Header;
