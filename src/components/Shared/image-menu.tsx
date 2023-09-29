import { FolderPlus, User } from "lucide-react";

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

export function ImageMenu({image}:{image:SearchResult}) {
  const [open,setOpen] = useState(false)
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
            <AddToAlbumDialog image={image}  onClose={()=>setOpen(false)}/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
