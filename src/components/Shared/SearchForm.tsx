"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SearchForm = ({intialSearch}:{intialSearch:string}) => {
    const router = useRouter()
  const [tagName, setTagName] = useState(intialSearch ?? '');

  useEffect(()=>{
setTagName(intialSearch)
  },[intialSearch])
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`
        )
        router.refresh()
    }}>
      <Label htmlFor="tag-name" className="text-right">
        Seach By Tag
      </Label>
      <div className="flex gap-2">
        <Input
          onChange={(e) => setTagName(e.currentTarget.value)}
          id="album-name "
          value={tagName}
          className="col-span-3"
        />
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default SearchForm;
