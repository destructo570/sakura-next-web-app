"use server";
import { z } from "zod";
import { action } from "@/utils/safe-action";
import { auth } from "@/auth/auth";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { redirect } from "next/navigation";

const CreatePostSchema = z.object({
  body: z.string(),
});

type CreatePostSchema = z.infer<typeof CreatePostSchema>;

const _createPost = async (post: CreatePostSchema) => {
  const session = await auth();
  console.log(post);

  if (!session) return { message: "User is not authenticated" };

  //Todo: Other validations regarding a post

  await db.insert(posts).values({
    body: post.body,
    userId: session.user.id,
  });

  redirect("/home");
};

export const createPost = action(CreatePostSchema, _createPost);
