"use server";
import { z } from "zod";
import { action } from "@/utils/safe-action";
import { auth } from "@/auth/auth";
import { db } from "@/database";
import { posts } from "@/database/schema/posts";
import { redirect } from "next/navigation";
import { and, eq } from "drizzle-orm";
import { likes } from "@/database/schema/likes";
import { comments } from "@/database/schema/comments";

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

  if (!post.body?.trim()?.length) return;

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

//======================
//==== Like Post =====
//======================

const LikePostSchema = z.object({
  postId: z.number(),
});

type LikePostSchema = z.infer<typeof LikePostSchema>;

const _likePost = async (params: LikePostSchema) => {
  const session = await auth();
  if (!session || !session.user.id || !params.postId) return;

  await db
    .insert(likes)
    .values({ postId: params.postId, userId: session.user.id });
};

//======================
//==== Add Comment =====
//======================

const CommentSchema = z.object({
  postId: z.number(),
  body: z.string(),
  parentId: z.number().nullable(),
});

type CommentSchema = z.infer<typeof CommentSchema>;

const _commentPost = async (params: CommentSchema) => {
  console.log("params", params);
  
  const { postId, body, parentId = null } = params;
  const session = await auth();
  if (!session || !session.user.id || !params.postId) return;

  await db.insert(comments).values({
    postId,
    body,
    userId:session.user.id,
    parentId: parentId,
  });
};

export const addCommentOnPost = action(CommentSchema, _commentPost);
export const createPost = action(CreatePostSchema, _createPost);
export const deletePost = action(DeletePostSchema, _deletePost);
export const likePost = action(LikePostSchema, _likePost);
