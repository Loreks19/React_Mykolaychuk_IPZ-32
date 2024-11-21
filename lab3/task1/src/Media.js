import React from "react";

function Media() {
  const dynamicImage = require("./image-dynamic.png"); // Dynamic import

  return (
    <div>
      <h1>Images and Videos</h1>
      <div>
        <h2>Images</h2>
        <img src="./logo192.png"  width="300" height="300" alt=""/>
        <img src="https://www.ldsp.kz/cms/uploads/images/1995943-3d-illustration-of-computer-mouse-connected-to-text-online-internet-concept(1).jpg" width="300" alt=""/>
        <img src={dynamicImage}  width="300" height="300"alt=""/>
      </div>
      <div>
        <h2>Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Media;