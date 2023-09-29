"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
  >();
  const [prompt, setPrompt] = useState("");
  const [pendingPrompt, setPendingPrompt] = useState("");
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Edit Your Images</h1>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
          </Button>
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>
            <Label>Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            />
          </div>
          <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert To Grey{" "}
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate{" "}
          </Button>
          <Button onClick={() => setTransformation("bg-remove")}>
            Background Remove
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
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
              fillBackground={{
                prompt,
              }}
            />
          )}
          {transformation === "blur" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              //@ts-ignore
              blur="800"
            />
          )}
          {transformation === "grayscale" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              //@ts-ignore
              grayscale
            />
          )}
          {transformation === "pixelate" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              //@ts-ignore
              pixelate
            />
          )}
          {transformation === "bg-remove" && (
            <CldImage
              src={publicId}
              width="1200"
              height="1400"
              alt={"some images"}
              removeBackground
            />
          )}
          <CldImage
            width="600"
            height="600"
            src="<Cloudinary URL>"
            alt="Description of my image"
          />
        </div>
      </div>
    </section>
  );
}
