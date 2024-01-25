"use server";
import { db } from "@/database";
import { users } from "@/database/schema/users";
import { action } from "@/utils/safe-action";
import { like } from "drizzle-orm";
import { z } from "zod";

//======================
//==== Search User =====
//======================

const SearchUserSchema = z.object({
    query: z.string()
})

type SearchUserSchema = z.infer<typeof SearchUserSchema>;

const _searchUser = async (params:SearchUserSchema) => {
    let people_list;
    if(params?.query?.length){
        people_list = await db.select().from(users).where(like(users.name, `%${params.query}%`));
    }else{
        people_list = await db.select().from(users).limit(100);
    }
    return people_list;
}

export const searchUser = action(SearchUserSchema, _searchUser);

