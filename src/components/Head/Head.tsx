import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand"
        rel="stylesheet"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://s3-sa-east-1.amazonaws.com/cuca-content/img/logo_cucalambe_web.png"
      />
      <title>Cabanas Cucalambe</title>
    </NextHead>
  );
};

export default Head;
