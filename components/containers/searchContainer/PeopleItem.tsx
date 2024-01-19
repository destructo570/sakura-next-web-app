import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PeopleItem = () => {
  return (
    <div className="flex gap-4 pt-4 w-full cursor-pointer">
      <div className="mt-1">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex gap-4 justify-between w-full divider pb-3">
        <div>
          <h5>Jane doe</h5>
          <p className="text-secondary">This is jane doe.</p>
          <p className="text-sm mt-2">2,312 followers</p>
        </div>
        <div className="mt-2">
          <Button variant="outline">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;
