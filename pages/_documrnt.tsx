import { ServerStyleSheets } from "@material-ui/styles";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

MyDocument.getInitialProps = async (context) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = context.renderPage;

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(context);
  return {
    ...initialProps,
    styles: [
        <React.Fragment key="style">
            {initialProps.styles}
            {sheets.getStyleElement()}
        </React.Fragment>
    ]
  };
};
