import CloudinaryImage from "@/components/Shared/cloudinary-image";
import UploadButton from "@/components/Shared/upload-btn";
import cloudinary from "cloudinary";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
export type SearchResult = {
  public_id: string;
  tags:string[]
};

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              // src={result.public_id}
              // publicId={result.public_id}
              path='/gallery'
              imageData={result}
              alt="an image of something"
              width="400"
              height="300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
