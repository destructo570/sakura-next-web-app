"use client";
import React from "react";
import { getUserInitials } from "@/utils/helper";
import { UserType } from "@/database/schema/users";
import { useAction } from "next-safe-action/hooks";
import { createPost } from "@/actions/post";
import { useRouter } from "next/navigation";
import { Avatar, Textarea, Button } from "@nextui-org/react";

const CreatePostContainer = ({ user }: { user: UserType }) => {
  const { execute } = useAction(createPost);
  const router = useRouter();

  const onCreatePost = async (formData: FormData) => {
    await execute({ body: formData.get("body") as string });
  };

  return (
    <form className="p-4" action={onCreatePost}>
      <div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col justify-start items-center gap-2">
            <Avatar
              src={user?.image ?? ""}
              name={getUserInitials(user?.name ?? "")}
            />
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h5>{user?.name}</h5>
            </div>
            <Textarea
              className="mt-4"
              placeholder="Share something..."
              name="body"
              rows={5}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full justify-end mt-4">
        <Button radius="sm" variant="light" onClick={() => router.push("/")} size="sm">
          Cancel
        </Button>
        <Button radius="sm" color="primary" type="submit" size="sm">Post</Button>
      </div>
    </form>
  );
};

export default CreatePostContainer;
