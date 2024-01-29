"use client";
import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import PostContainer from "../postContainer/PostContainer";
import { UserType } from "@/database/schema/users";
import { PostType } from "@/database/schema/posts";
import { Button } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import EditProfileModal from "./EditProfileModal";

interface PropType {
  user: UserType;
  posts_list: (PostType & { user: UserType })[];
}

const ProfileContainer = (props: PropType) => {
  const { user, posts_list } = props;
  const [posts, setPosts] = useState(posts_list);
  const [bio, setBio] = useState(user?.bio ?? "");
  const { data: session } = useSession();

  const onDeleteSuccess = (_: any, input: any) => {
    setPosts((prev) => prev.filter((item) => item.id !== input.id));
  };

  return (
    <div className="h-full">
      <div className="p-4 divider">
        <ProfileInfo user={user} />
        {bio ? (
          <p className="py-4">{bio}</p>
        ) : (
          <p className="py-4 text-secondary">Write something about yourself...</p>
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
      <div>
        {posts?.map((item) => (
          <PostContainer
            post={item}
            key={item.id}
            onDeleteSuccess={onDeleteSuccess}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileContainer;
