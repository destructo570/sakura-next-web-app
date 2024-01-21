import React from "react";
import ProfileInfo, { UserType } from "./ProfileInfo";
import UserBio from "./UserBio";
import ProfileActions from "./ProfileActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileTab } from "@/constants/Profile";
import PostContainer, { PostType } from "../postContainer/PostContainer";
interface PropType {
  user: UserType | undefined;
  posts: PostType[]
}

const ProfileContainer = (props: PropType) => {
  const { user, posts } = props;

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
        {
          posts?.map(item => <PostContainer post={item} key={item.id}/>)
        }
        </TabsContent>
        <TabsContent value={ProfileTab.REPLIES}>

        </TabsContent>
        <TabsContent value={ProfileTab.REPOSTS}>

        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileContainer;
