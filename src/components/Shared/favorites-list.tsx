"use client";
import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";
import CloudinaryImage from "./cloudinary-image";
import { useEffect, useState } from "react";
import ImageGrid from "./image-grid";

const FavoritesList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            // src={result.public_id}
            // publicId={result.public_id}
            // path="/favorites"
            imageData={imageData}
            alt="an image of something"
            width="400"
            height="300"
            onUnheart={(unheartedResource) => {
              setResources((currentResource) =>
                currentResource.filter(
                  (resource) =>
                    resource.public_id !== unheartedResource.public_id
                )
              );
            }}
          />
        );
      }}
    />
  );
};

export default FavoritesList;
