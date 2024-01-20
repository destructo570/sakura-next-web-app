import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();
 
export default {
  schema: "./database/schema/*",
  out: "./drizzle",
  driver: 'turso',
  dbCredentials: {
    //TODO: Replace with url and authToken of turso
    // url:
    // authToken:
    url: 'file:./local.db',
  }
} satisfies Config;
