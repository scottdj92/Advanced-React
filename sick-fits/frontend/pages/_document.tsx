import React from "react";
import Document, { Main, NextScript, Head } from "next/document";
import { ServerStyleSheet, Styles } from "styled-components";

type DocumentProps = {
    styleTags: Styles;
};

class MyDocument extends Document<DocumentProps> {
    public static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }
    public render() {
        return (
            <html>
                <Head>
                    <title>Sick Fits</title>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
