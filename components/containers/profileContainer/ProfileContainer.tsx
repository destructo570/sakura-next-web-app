import React from "react";
import ProfileInfo from "./ProfileInfo";
import UserBio from "./UserBio";
import ProfileActions from "./ProfileActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileTab } from "@/constants/Profile";
import PostContainer from "../postContainer/PostContainer";

const ProfileContainer = () => {
  return (
    <div className="h-full">
      <ProfileInfo />
      <UserBio />
      <p className="text-secondary">180 followers</p>
      <ProfileActions />
      <Tabs defaultValue={ProfileTab.THREADS}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value={ProfileTab.THREADS}>Threads</TabsTrigger>
          <TabsTrigger value={ProfileTab.REPLIES}>Replies</TabsTrigger>
          <TabsTrigger value={ProfileTab.REPOSTS}>Reposts</TabsTrigger>
        </TabsList>
        <TabsContent value={ProfileTab.THREADS}>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
        </TabsContent>
        <TabsContent value={ProfileTab.REPLIES}>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
        </TabsContent>
        <TabsContent value={ProfileTab.REPOSTS}>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>
          <PostContainer/>

        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileContainer;
