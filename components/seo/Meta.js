import Head from "next/head";

/**
 *
 * @param {*} param0
 * @returns A meta headers component
 */

const Meta = ({ title, description, image, twitterType, link }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${link ? link : ""}/${image}`} />
      <meta property="twitter:card" content={twitterType} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content={link} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default Meta;
