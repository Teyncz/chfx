import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="antialiased max-h-[100vh] h-full overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
