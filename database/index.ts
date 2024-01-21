import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as posts from "./schema/posts";
import * as users from "./schema/users";

const client = createClient({ url: 'file:./local.db' });
// const client = createClient({ url: process.env.DATABASE_URL!, authToken: process.env.DATABASE_AUTH_TOKEN });

export const db = drizzle(client, { schema: { ...posts, ...users } });