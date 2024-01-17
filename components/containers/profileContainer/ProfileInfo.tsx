import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileInfo = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="pb-0">Chad CN</h3>
          <p>chad.cn</p>
        </div>
        <div>
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
