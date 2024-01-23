"use client";
import React, { useState } from "react";
import ProfileInfo, { UserType } from "./ProfileInfo";
import UserBio from "./UserBio";
import ProfileActions from "./ProfileActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileTab } from "@/constants/Profile";
import PostContainer, { PostType } from "../postContainer/PostContainer";
import { useAction } from "next-safe-action/hooks";
import { deletePost } from "@/actions/post";

interface PropType {
  user: UserType | undefined;
  posts_list: PostType[];
}

const ProfileContainer = (props: PropType) => {
  const { user, posts_list } = props;
  const [posts, setPosts] = useState(posts_list);

  const { execute } = useAction(deletePost, {
    onSuccess: (_, input) => {
      setPosts((prev) => prev.filter((item) => item.id !== input.id));
    },
  });

  const onDeletePost = async (postId: number) => {
    console.log(postId);
    await execute({ id: postId! });
  };

  return (
    <div className="h-full">
      <div className="p-4">
        <ProfileInfo user={user} />
        <UserBio />
        <p className="text-secondary">180 followers</p>
        <ProfileActions />
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
              onDeletePost={onDeletePost.bind(null, item.id)}
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
