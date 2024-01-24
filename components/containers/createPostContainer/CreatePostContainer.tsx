import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

const CreatePostContainer = ({
  onCreatePost,
}: {
  onCreatePost: (formData: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form className="p-4" onSubmit={onCreatePost}>
      <div>
        <div className="flex gap-4 mt-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="h-full w-1 bg-zinc-800"></div>
          </div>
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h5>vishal.kashi</h5>
              <X size={16} />
            </div>
            <Textarea placeholder="Start a thread..." name="body" />
          </div>
        </div>
        <div className="mt-2 mx-2 flex gap-2 items-center">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
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
        <Button variant="ghost">Cancel</Button>
        <Button type="submit">Post</Button>
      </div>
    </form>
  );
};

export default CreatePostContainer;
