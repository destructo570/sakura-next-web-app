import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import { getUserInitials } from "@/utils/helper";
import { UserType } from "@/database/schema/users";

const PeopleItem = ({ user }: { user: UserType }) => {
  return (
    <div className="flex gap-4 pt-4 w-full cursor-pointer">
      <div className="mt-1">
        <Avatar
          src={user?.image ?? ""}
          name={getUserInitials(user?.name ?? "")}
        />
      </div>
      <div className="flex gap-4 justify-between w-full divider pb-3">
        <div>
          <h5>{user?.name}</h5>
          <p className="text-secondary">{user.name}</p>
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
