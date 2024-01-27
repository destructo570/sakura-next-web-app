"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getUserInitials } from "@/utils/helper";
import { UserType } from "@/database/schema/users";
import { useAction } from "next-safe-action/hooks";
import { createPost } from "@/actions/post";
import { useRouter } from "next/navigation";

const CreatePostContainer = ({ user }: { user: UserType }) => {
  const { execute } = useAction(createPost);
  const router = useRouter()

  const onCreatePost = async (formData: FormData) => {
    await execute({ body: formData.get("body") as string});
  };

  return (
    <form className="p-4" action={onCreatePost}>
      <div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col justify-start items-center gap-2">
            <Avatar>
              <AvatarImage src={user?.image ?? ""} alt="@shadcn" />
              <AvatarFallback>
                {getUserInitials(user?.name ?? "")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h5>{user?.name}</h5>
            </div>
            <Textarea
              className="mt-4"
              placeholder="Start a thread..."
              name="body"
              rows={5}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-full justify-end mt-4">
        <Button variant="ghost" onClick={() => router.push("/home")}>
          Cancel
        </Button>
        <Button type="submit">Post</Button>
      </div>
    </form>
  );
};

export default CreatePostContainer;
