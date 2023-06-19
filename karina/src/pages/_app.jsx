import React from "react";
import App from "next/app";
import ImageWrapper from "../Components/ImageGallery/ImageWrapper/ImageWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <App /> */}
      <ImageWrapper />
      {/* <Component {...pageProps} /> */}
    </>
  );
}

export default MyApp;
