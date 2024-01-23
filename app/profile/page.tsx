import React from "react";
import ProfileContainer from "@/components/containers/profileContainer/ProfileContainer";
import { redirect } from "next/navigation";
import { auth } from "@/auth/auth";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema/users";

const ProfilePage = async () => {
  const session = await auth();

  if (!session || !session?.user?.id)
    redirect("/api/auth/signin?callbackUrl=/profile");
  const post_list = await db
    .select({
      id: posts.id,
      body: posts.body,
      createdOn: posts.createdOn,
      user: {
        id: users.id,
        name: users.name,
        image: users.image,
      },
    })
    .from(posts)
    .where(eq(posts.userId, session.user.id))
    .innerJoin(users, eq(users.id, session.user.id));
  return (
    <div className="h-full">
      <ProfileContainer user={session.user} posts_list={post_list} />
    </div>
  );
};

export default ProfilePage;
