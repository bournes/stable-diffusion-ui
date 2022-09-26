import React from "react";

import { CompletedImagesType } from "../currentDisplay";


import { useImageDisplay } from "../../../../stores/imageDisplayStore";

import {
  completedImagesMain,
  completedImagesList,
  imageContain,
  RemoveButton,
  // @ts-expect-error
} from "./completedImages.css.ts";



export default function CompletedImages(

) {


  const images = useImageDisplay((state) => state.images);
  const setCurrentImage = useImageDisplay((state) => state.setCurrentImage);
  const clearDisplay = useImageDisplay((state) => state.clearDisplay);


  // const _handleSetCurrentDisplay = (index: number) => {
  //   const image = images![index];
  //   setCurrentDisplay(image);
  // };

  const removeImagesAll = () => {
    clearDisplay();
  };

  return (
    <div className={completedImagesMain}>
      {/* Adjust the dom do we dont do this check twice */}
      {images != null && images.length > 0 && (
        <button
          className={RemoveButton}
          onClick={() => {
            removeImagesAll();
          }}
        >
          REMOVE
        </button>
      )}
      <ul className={completedImagesList}>
        {images?.map((image, index) => {
          if (void 0 === image) {
            console.warn(`image ${index} is undefined`);
            return null;
          }

          return (
            <li key={image.id}>
              <button
                className={imageContain}
                onClick={() => {
                  setCurrentImage(image);
                }}
              >
                <img src={image.data} alt={image.info.prompt} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
