import React from "react";
import ProfileInfo from "./ProfileInfo";
import UserBio from "./UserBio";
import ProfileActions from "./ProfileActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileTab } from "@/constants/Profile";

const ProfileContainer = () => {
  return (
    <div className="p-4">
      <ProfileInfo />
      <UserBio />
      <p className="text-zinc-500 text-sm">180 followers</p>
      <ProfileActions />
      <Tabs defaultValue={ProfileTab.THREADS}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value={ProfileTab.THREADS}>Threads</TabsTrigger>
          <TabsTrigger value={ProfileTab.REPLIES}>Replies</TabsTrigger>
          <TabsTrigger value={ProfileTab.REPOSTS}>Reposts</TabsTrigger>
        </TabsList>
        <TabsContent value={ProfileTab.THREADS}>
          <p>This is threads</p>
        </TabsContent>
        <TabsContent value={ProfileTab.REPLIES}>
          <p>This is following</p>
        </TabsContent>
        <TabsContent value={ProfileTab.REPOSTS}>
          <p>This is reposts</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileContainer;
