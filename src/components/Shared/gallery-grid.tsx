"use client";
import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from "@/components/Shared/cloudinary-image";
import ImageGrid from "@/components/Shared/image-grid";

const GalleryGrid = ({ images }: { images: SearchResult[] }) => {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            // src={result.public_id}
            // publicId={result.public_id}
            imageData={imageData}
            alt="an image of something"
            width="400"
            height="300"
          />
        );
      }}
    />
  );
};
export default GalleryGrid;
