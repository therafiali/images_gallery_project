"use client";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import Heart from "../icons/heart";
import { setAsMarkAsFavoriteAction } from "./actions";
import { useState, useTransition } from "react";
import { SearchResult } from "@/app/gallery/page";
import FullHeart from "../icons/full-heart";

const ClodinaryImage = (props: any & {imageData:SearchResult;path:string}) => {
  const [transition, startTransition] = useTransition();
  const {imageData} = props
  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );
  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ?  <FullHeart
         onClick={() => {
            setIsFavorited(false);
            startTransition(() => {
                setAsMarkAsFavoriteAction(imageData.public_id, false,props.path);
            });
          }}
        className=" absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
      />: 
      <Heart
        onClick={() => {
            setIsFavorited(true);
          startTransition(() => {
            setAsMarkAsFavoriteAction(imageData.public_id,true,props.path);
          });
        }}
        className=" absolute top-2 right-2 hover:text-red-500 cursor-pointer"
      />}
    </div>
  );
};

export default ClodinaryImage;
