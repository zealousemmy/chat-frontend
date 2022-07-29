import Head from "next/head";

export const Header = () => {
  return (
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#0072c2" />
      <meta
        name="description"
        content="Your Perspectives Count, Be Part of The Conversation."
      />
      <meta property="og:title" content="Abolle " />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content="https://abolle.com/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <link rel="manifest" href="/manifest.json" />
      <title>Abolle </title>
    </Head>
  );
};
