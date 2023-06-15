import "./App.css";
// import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageWrapper from "./Components/ImageGallery/ImageWrapper/ImageWrapper.jsx";
// import one from "./services/gallery/1.jpg";
// import two from "./services/gallery/2.jpg";

function App() {
  // console.log(one);
  // const image = [one, two];
  return (
    <>
      {/* <ImageGallery image={image} /> */}
      <ImageWrapper />
    </>
  );
}

export default App;
