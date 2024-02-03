import React from "react";
import ProfileContainer from "@/components/containers/profileContainer/ProfileContainer";

import { fetchUserPosts } from "@/database/queries/post";
import { fetchUserData } from "@/database/queries/user";

const ProfilePage = async ({ params }: { params: { userId: string } }) => {
  const { userId } = params || {};

  //Todo: Some way to remove this db call and extract bio from session itself
  const user_data = await fetchUserData(userId);

  const post_list = await fetchUserPosts(userId);

  return (
    <div className="h-full">
      <ProfileContainer user={user_data[0]} posts_list={post_list} />
    </div>
  );
};

export default ProfilePage;
