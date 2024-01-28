import React from "react";
import { Avatar } from "@nextui-org/react";
import { UserType } from "@/database/schema/users";
import { getUserInitials } from "@/utils/helper";

interface PropType {
  user: UserType;
}

const ProfileInfo = (props: PropType) => {
  const { user } = props;
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h3 className="pb-0">{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
        <div>
        <Avatar
              src={user?.image ?? ""}
              name={getUserInitials(user?.name ?? "")}
            />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
