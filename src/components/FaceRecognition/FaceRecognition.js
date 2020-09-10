import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center mt2">
      <div className="absolute">
        <img
          id="inputimage"
          className="br3"
          alt=""
          src={imageUrl}
          width="500"
          height="auto"
        ></img>
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
