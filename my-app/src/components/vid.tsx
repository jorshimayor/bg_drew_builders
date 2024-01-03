import React from "react";

export default function Vid() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        disablePictureInPicture
        className="w-full h-svh serve6 mix-blend-overlay object-cover z-[-1] absolute bg-black -ml-[50px]"
      >
        <source src="/vid1.webm" type="video/webm" />
      </video>
    </div>
  );
}
