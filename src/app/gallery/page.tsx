import SearchForm from "@/components/Shared/SearchForm";
import ForcedRefresh from "@/components/Shared/forced-refresh";
import GalleryGrid from "@/components/Shared/gallery-grid";
import ImageGrid from "@/components/Shared/image-grid";
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
  tags: string[];
};

const GalleryPage = async ({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForcedRefresh/>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <UploadButton />
        </div>
        <SearchForm intialSearch={search} />
        <GalleryGrid images={results.resources} />
      </div>
    </section>
  );
};

export default GalleryPage;
