"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ForcedRefresh = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh;
  }, []);
  return <></>;
};

export default ForcedRefresh;
