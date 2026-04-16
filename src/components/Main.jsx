import Image1 from "./images/image1.jsx";
import Image2 from "./images/image2.jsx";
import Image3 from "./images/image3.jsx";
import Image4 from "./images/image4.jsx";
import Image5 from "./images/image5.jsx";
import Image6 from "./images/image6.jsx";
import Image7 from "./images/image7.jsx";
import Image8 from "./images/image8.jsx";
import Image9 from "./images/image9.jsx";
import Image10 from "./images/image10.jsx";
import Image11 from "./images/image11.jsx";
import Image12 from "./images/image12.jsx";

function Main() {
  return (
    <div className="row content">

      {/* INTRO TEXT */}
      <div className="content-text">
        <p>
          Place your Intro text here...
        </p>

        <h2>Images:</h2>
        <p>Click on each image to open high-res version</p>
      </div>

      {/* IMAGES GRID */}
      <div className="center">
        <div className="grid-container-4-2">

          <Image1 />
          <Image2 />
          <Image3 />
          <Image4 />
          <Image5 />
          <Image6 />
          <Image7 />
          <Image8 />
          <Image9 />
          <Image10 />
          <Image11 />
          <Image12 />

        </div>
      </div>

    </div>
  )
}

export default Main