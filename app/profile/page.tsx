import React from "react";
import ProfileContainer from "@/components/containers/profileContainer/ProfileContainer";
import { redirect } from "next/navigation";
import { auth } from "@/auth/auth";


const ProfilePage = async () => {
  const session = await auth();
  if(!session) redirect('/api/auth/signin?callbackUrl=/profile');

  return (
    <div className="h-full">
      <ProfileContainer user={session.user}/>
    </div>
  );
};

export default ProfilePage;
