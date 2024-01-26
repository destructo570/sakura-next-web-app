import React from "react";
import CreatePostContainer from "@/components/containers/createPostContainer/CreatePostContainer";
import { auth } from "@/auth/auth";

const CreatePostPage = async () => {
  const session = await auth();

  return (
    <div>
      <CreatePostContainer user={session?.user}/>
    </div>
  );
};

export default CreatePostPage;
