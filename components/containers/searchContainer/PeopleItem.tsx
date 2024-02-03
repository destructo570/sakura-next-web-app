"use client";
import React from "react";
import { Avatar, Button, Skeleton } from "@nextui-org/react";
import { getUserInitials } from "@/utils/helper";
import { UserType } from "@/database/schema/users";
import { useRouter } from "next/navigation";

const PeopleItem = ({ user }: { user: UserType }) => {
  const router = useRouter();

  const onUserClick = () => {
    router.push(`/profile/${user.id}`);
  };

  return (
    <div
      className="flex gap-4 pt-4 w-full hover:bg-zinc-900/30 hover:cursor-pointer px-4"
      onClick={onUserClick}
    >
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
        <div className="flex h-full flex-col justify-center">
          <Button radius="sm" size="sm">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PeopleItem;
