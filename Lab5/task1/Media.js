import React from "react";

function Media() {
  const dynamicImage = require("../assets/dynamic-image.jpg"); // Dynamic import

  return (
    <div>
      <h1>Images and Videos</h1>
      <div>
        <h2>Images</h2>
        <img src="/static-image.jpg"  width="300" />
        <img src="https://via.placeholder.com/300" width="300" />
        <img src={dynamicImage}  width="300" />
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