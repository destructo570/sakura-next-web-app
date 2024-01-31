import { PostType } from "@/database/schema/posts";
import { UserType } from "@/database/schema/users";

export type PostDataType = (PostType & { user: UserType, likes: number });