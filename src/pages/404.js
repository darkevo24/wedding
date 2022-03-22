import React from "react";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>WeddingPlatform | 404 - Page Not Found</title>
      </Head>
      <div className="h-96 flex justify-center items-center">
        <p className="text-bg-primary text-2xl">Error 404 - Page Not Found</p>
      </div>
    </>
  );
};

export default Custom404;
