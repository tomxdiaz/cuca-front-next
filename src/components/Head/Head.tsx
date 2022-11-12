import NextHead from 'next/head';

const Head = () => {
  return (
    <NextHead>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='icon'
        type='image/png'
        href='https://s3-sa-east-1.amazonaws.com/cuca-content/img/logo_cucalambe_web.png'
      />
      <title>Cabañas Cucalambe</title>
    </NextHead>
  );
};

export default Head;
