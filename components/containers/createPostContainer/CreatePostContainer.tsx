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
  const onCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!e?.target) return;
    e.preventDefault();
    const form = e.target;
    //Todo: fix typescript error
    await execute({ body: form.elements.body.value });
  };
  return (
    <form className="p-4" onSubmit={onCreatePost}>
      <div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <Avatar>
              <AvatarImage src={user?.image ?? ""} alt="@shadcn" />
              <AvatarFallback>
                {getUserInitials(user?.name ?? "")}
              </AvatarFallback>
            </Avatar>
            <div className="h-full w-1 bg-zinc-800"></div>
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
        <div className="mt-2 mx-2 flex gap-2 items-center">
          <Avatar className="h-6 w-6">
            <AvatarImage src={user?.image ?? ""} alt="@shadcn" />
            <AvatarFallback>{getUserInitials(user?.name ?? "")}</AvatarFallback>
          </Avatar>
          <Button
            className="text-zinc-600 font-light hover:bg-transparent"
            variant="ghost"
          >
            Add to thread
          </Button>
        </div>
      </div>
      <div className="flex gap-4 w-full justify-end">
        <Button variant="ghost" onClick={() => router.push("/home")}>
          Cancel
        </Button>
        <Button type="submit">Post</Button>
      </div>
    </form>
  );
};

export default CreatePostContainer;
