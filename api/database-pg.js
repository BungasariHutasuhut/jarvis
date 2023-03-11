import pkg from "pg";
const { Client } = pkg;
export const client = new Client({
  host: "db.jvreqtxkdarywhnfvrem.supabase.co",
  user: "postgres",
  password: "bungasari123",
  database: "postgres",
});
await client.connect();
