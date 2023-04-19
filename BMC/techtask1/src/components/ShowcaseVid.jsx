import React from "react";

export const ShowcaseVid = (props) => {
  return (
    <>
      <div style={{ borderRadius: props.borderrad, overflow: "hidden" }}>
        <video
          src={props.video}
          autoPlay
          muted
          loop
          className={props.vidsize}
          style={{ objectFit: "cover" }}
        ></video>
      </div>
    </>
  );
};
