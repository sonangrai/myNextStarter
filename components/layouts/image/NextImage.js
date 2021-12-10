import React from "react";
import Image from "next/image";
import { ImageWrapper } from "./styled/ImageWrapper.styled";

/**
 *
 * height = height for image
 * src = image source
 * alt = alt text
 * layout = image fill type
 * @returns The Image Component that will implement the next Image.
 */

const NextImage = ({ height, src, alt, layout }) => {
  return (
    <ImageWrapper height={height} layout={layout || "cover"}>
      <Image
        src={
          src ||
          "https://res.cloudinary.com/urban-culture-channel/image/upload/v1639063803/sample.jpg"
        }
        layout="fill"
        alt={alt || "Alt Text"}
      />
    </ImageWrapper>
  );
};

export default NextImage;
