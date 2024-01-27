"use client";
import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileTab } from "@/constants/Profile";
import PostContainer from "../postContainer/PostContainer";
import { UserType } from "@/database/schema/users";
import { PostType } from "@/database/schema/posts";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
interface PropType {
  user: UserType;
  posts_list: (PostType & UserType)[];
}

const ProfileContainer = (props: PropType) => {
  const { user, posts_list } = props;
  const [posts, setPosts] = useState(posts_list);
  const { data: session } = useSession();

  const onDeleteSuccess = (_: any, input: any) => {
    setPosts((prev) => prev.filter((item) => item.id !== input.id));
  };

  return (
    <div className="h-full">
      <div className="p-4">
        <ProfileInfo user={user} />
        <p>{"This is my bio. Lorem ipsum dolor solemit"}</p>
        <p className="text-secondary">180 followers</p>
        <div className="flex gap-4 my-4">
          <Button variant="outline" className="w-full">
            Follow
          </Button>
          {user.id === session?.user.id ? (
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          ) : null}
        </div>
      </div>
      <Tabs defaultValue={ProfileTab.THREADS}>
        <TabsList className="grid grid-cols-3 mx-4">
          <TabsTrigger value={ProfileTab.THREADS}>Threads</TabsTrigger>
          <TabsTrigger value={ProfileTab.REPLIES}>Replies</TabsTrigger>
          <TabsTrigger value={ProfileTab.REPOSTS}>Reposts</TabsTrigger>
        </TabsList>
        <TabsContent value={ProfileTab.THREADS}>
          {posts?.map((item) => (
            <PostContainer
              post={item}
              key={item.id}
              onDeleteSuccess={onDeleteSuccess}
            />
          ))}
        </TabsContent>
        <TabsContent value={ProfileTab.REPLIES}></TabsContent>
        <TabsContent value={ProfileTab.REPOSTS}></TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileContainer;
