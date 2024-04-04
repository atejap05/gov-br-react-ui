import { useState, useEffect } from "react";

export const useIsValidImage = (src: string) => {
  const [isValidImage, setIsValidImage] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setIsValidImage(true);
    image.onerror = () => setIsValidImage(false);
  }, [src]);

  return isValidImage;
};
