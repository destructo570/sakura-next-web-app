import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/types/interafce";
interface PropType {
  user?: UserType;
}

const HasRepliesIndicator = (props: PropType) => {
  const { user } = props;
  return (
    <div className="flex flex-col h-full w-full items-center gap-4 rounded-full">
      <Avatar>
        <AvatarImage src={user?.image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {/* <div className="h-full w-1 bg-zinc-800"></div>
      <Avatar className="h-6 w-6">
        <AvatarImage src={user?.image} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}
    </div>
  );
};

export default HasRepliesIndicator;
