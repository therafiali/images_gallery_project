import { SearchResult } from "@/app/gallery/page";
import AlbumGrid from "@/components/Shared/album-grid";
import ForcedRefresh from "@/components/Shared/forced-refresh";
import ImageGrid from "@/components/Shared/image-grid";
import UploadButton from "@/components/Shared/upload-btn";
import cloudinary from "cloudinary";

const GalleryPage = async ({
  params: { albumname },
}: {
  params: {
    albumname: string;
  };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumname}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForcedRefresh/>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold capitalize">Album {albumname} </h1>
          <UploadButton />
        </div>
        <AlbumGrid images={results.resources} />
      </div>
    </section>
  );
};

export default GalleryPage;
