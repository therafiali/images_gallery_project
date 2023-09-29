"use server";
import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";
import ClodinaryImage from "./Shared/cloudinary-image";

export async function addImageToAlbum(album: string, image: SearchResult) {
  await cloudinary.v2.api.create_folder(album);

let parts = image.public_id.split('/')
if (parts.length > 1){
parts = parts.slice(1)
}
const publicId = parts.join('/')

  await cloudinary.v2.uploader.rename(
    image.public_id,
    `${album}/${image.public_id}`
  );
}
