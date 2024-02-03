import { UserType } from "../schema/users";
import { db } from "@/database";
import { eq } from "drizzle-orm";
import { users } from "@/database/schema/users";

export const fetchUserData = async (userId: string): Promise<UserType[]> => {
  return await db.select().from(users).where(eq(users.id, userId));
};
