"use client";

import React, { useEffect, useState } from "react";

const HeroVideo: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <video
      src="https://cdn.pixabay.com/video/2024/07/09/220296_tiny.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    />
  );
};

export default HeroVideo;
