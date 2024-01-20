import React from "react";
import ProfileInfo, { UserType } from "./ProfileInfo";
import UserBio from "./UserBio";
import ProfileActions from "./ProfileActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileTab } from "@/constants/Profile";
import PostContainer from "../postContainer/PostContainer";
interface PropType {
  user: UserType | undefined;
}

const ProfileContainer = (props: PropType) => {
  const { user } = props;

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
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
        </TabsContent>
        <TabsContent value={ProfileTab.REPLIES}>
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
        </TabsContent>
        <TabsContent value={ProfileTab.REPOSTS}>
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileContainer;
