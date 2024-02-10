"use client";
import React from "react";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const onGoBack = () => {
    router.back();
  };
  return (
    <div className="flex gap-4 py-2">
      <ArrowLeft className="hover:cursor-pointer hover:rounded-full hover:bg-zinc-900 hover:p-2 p-2" size={40} onClick={onGoBack} />
    </div>
  );
};

export default Header;
