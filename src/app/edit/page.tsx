"use client";

import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "pixelate"|"bg-remove"
  >();
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit {publicId}</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>
          <Button onClick={() => setTransformation("generative-fill")}>
            Apply Generative Fill
          </Button>
          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert To Grey{" "}
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate{" "}
          </Button>
          {/* <Button onClick={() => setTransformation("bg-remove")}>
            Background Remove
          </Button> */}
        </div>
        <div className="grid grid-col-2 gap-12">
          <CldImage
            src={publicId}
            width="300"
            height="200"
            alt={"some images"}
          />
          {transformation === "generative-fill" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              crop="pad"
              fillBackground
            />
          )}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              blur="800"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              grayscale
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              pixelate
            />
          )}
          {/* {transformation === "bg-remove" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              removeBackground
            />
          )} */}
        </div>
      </div>
    </section>
  );
}
