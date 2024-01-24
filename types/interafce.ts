export interface PostType {
  id: number;
  body: string;
  likes: number;
  user: UserType;
  replies: PostType[];
}

export interface UserType {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string;
}
