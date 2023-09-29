import { FolderPlus, Pencil, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuIcon from "../icons/menu";
import { AddToAlbumDialog } from "./add-to-album-dailog";
import { SearchResult } from "@/app/gallery/page";
import { useState } from "react";
import Link from "next/link";

export function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40">
          <DropdownMenuItem asChild>
            {/* <FolderPlus className="mr-2 h-4 w-4" />
            <span>Add to Album</span> */}
            <AddToAlbumDialog image={image} onClose={() => setOpen(false)} />
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            {/* <FolderPlus className="mr-2 h-4 w-4" />
            <span>Add to Album</span> */}
            <Button className="cursor-pointer flex justify-start pl-4" asChild variant="ghost">
              <Link className="cursor-pointer"
                href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}
              >
                <Pencil className="mr-2 w-4 h-4" />
                Edit
              </Link>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
