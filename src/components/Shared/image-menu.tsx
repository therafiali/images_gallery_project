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

export function ImageMenu() {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" className="w-8 h-8 p-0">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuItem>
            <FolderPlus />
            <span>Add to Album</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
