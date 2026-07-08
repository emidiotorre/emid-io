import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0d1117" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
