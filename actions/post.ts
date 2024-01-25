"use server";
import { z } from "zod";
import { action } from "@/utils/safe-action";
import { auth } from "@/auth/auth";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";

//======================
//==== Create Post =====
//======================

const CreatePostSchema = z.object({
  body: z.string(),
});

type CreatePostSchema = z.infer<typeof CreatePostSchema>;

const _createPost = async (post: CreatePostSchema) => {
  const session = await auth();

  if (!session) return { message: "User is not authenticated" };

  if(!post.body?.trim()?.length) return;

  await db.insert(posts).values({
    body: post.body,
    userId: session.user.id,
  });

  redirect("/home");
};

//======================
//==== Delete Post =====
//======================

const DeletePostSchema = z.object({
  id: z.number(),
});

type DeletePostSchema = z.infer<typeof DeletePostSchema>;

const _deletePost = async (post: DeletePostSchema) => {
  const session = await auth();
  if (!session || !session.user.id || !post.id) return;

  await db
    .delete(posts)
    .where(and(eq(posts.userId, session.user.id), eq(posts.id, post.id)));
};

export const createPost = action(CreatePostSchema, _createPost);
export const deletePost = action(DeletePostSchema, _deletePost);
