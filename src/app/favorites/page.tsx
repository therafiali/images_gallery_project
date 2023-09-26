import CloudinaryImage from "@/components/Shared/cloudinary-image";
import cloudinary from "cloudinary";
import { SearchResult } from "../gallery/page";
import ForcedRefresh from "@/components/Shared/forced-refresh";

const FavoritePage = async () => {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  return (
    <section>
      <ForcedRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {results.resources.map((result) => (
            <CloudinaryImage
              key={result.public_id}
              // src={result.public_id}
              // publicId={result.public_id}
              path="/favorites"
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

export default FavoritePage;
