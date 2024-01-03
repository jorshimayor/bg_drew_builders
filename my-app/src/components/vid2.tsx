import React from "react";

export default function Vid2() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        disablePictureInPicture
        className="w-full h-svh serve6 mix-blend-overlay object-cover z-[-1] absolute bg-blue-300 -ml-[50px]"
      >
        <source src="/vid2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
