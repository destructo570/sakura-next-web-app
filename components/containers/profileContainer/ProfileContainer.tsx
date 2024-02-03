"use client";
import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { UserType } from "@/database/schema/users";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import EditProfileModal from "./EditProfileModal";
import { PostDataType } from "@/types/interafce";
import PostListContainer from "../postContainer/PostListContainer";

interface PropType {
  user: UserType;
  posts_list: PostDataType[];
}

const ProfileContainer = (props: PropType) => {
  const { user, posts_list } = props;
  const [bio, setBio] = useState(user?.bio ?? "");
  const { data: session } = useSession();

  if (!user) {
    return <p className="text-center">This account does not exist</p>;
  }

  return (
    <div className="h-full">
      <div className="p-4 divider">
        <ProfileInfo user={user} />
        {bio ? (
          <p className="py-4">{bio}</p>
        ) : (
          <p className="py-4 text-secondary">
            Write something about yourself...
          </p>
        )}
        <p className="text-secondary">180 followers</p>
        <div className="flex gap-4 my-4">
          {user.id !== session?.user.id ? (
            <Button variant="flat" className="w-full">
              Follow
            </Button>
          ) : null}
          {user.id === session?.user.id ? (
            <EditProfileModal userBio={bio} setBio={setBio} />
          ) : null}
        </div>
      </div>
      <PostListContainer posts_list={posts_list} />
    </div>
  );
};

export default ProfileContainer;
