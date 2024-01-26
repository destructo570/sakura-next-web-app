import React from "react";
import CreatePostContainer from "@/components/containers/createPostContainer/CreatePostContainer";
import { auth } from "@/auth/auth";
import { redirect } from "next/navigation";
import { getRedirectUrl } from "@/utils/helper";

const CreatePostPage = async () => {
  const session = await auth();

  if (!session) redirect(getRedirectUrl("/create-post"));

  return (
    <div>
      <CreatePostContainer user={session.user} />
    </div>
  );
};

export default CreatePostPage;
