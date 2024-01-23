"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { UserType } from "../profileContainer/ProfileInfo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface PropType {
  user?: UserType;
}

const PostHeader = (props: PropType) => {
  const { user } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* <Avatar>
        <AvatarImage src={user?.image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
        <h5>{user?.name}</h5>
      </div>
      <div className="flex gap-2 mr-4 items-center">
        <p className="text-secondary">22h</p>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <MoreHorizontal size={16} /> */}
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>Share Post</DropdownMenuItem>
              <DropdownMenuItem>Delete Post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
