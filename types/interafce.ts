import { PostType } from "@/database/schema/posts";
import { UserType } from "@/database/schema/users";

export interface PostExtendedUser extends PostType {
    user: UserType;
}