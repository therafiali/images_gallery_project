import CloudinaryImage from "@/components/Shared/cloudinary-image";
import UploadButton from "@/components/Shared/upload-btn";
import cloudinary from "cloudinary";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};
type SearchResult = {
  public_id: string;
};

const GalleryPage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(10)
    .execute()) as { resources: SearchResult[] };
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div  className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton/>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              src={result.public_id}
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
