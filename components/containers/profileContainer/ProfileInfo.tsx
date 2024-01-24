import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserType } from "@/types/interafce";

interface PropType {
  user: UserType | undefined;
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
          <Avatar className="h-16 w-16">
            <AvatarImage src={user?.image} alt="me" />
            <AvatarFallback>Me</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
