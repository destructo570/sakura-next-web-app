import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { UserType } from "../profileContainer/ProfileInfo";

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
        <MoreHorizontal size={16}/>
    </div>
    </div>
  );
};

export default PostHeader;
