import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Load environment variables from .env file
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: process.env.DATABASE_URL || "mysql://root:@localhost:3306/jk_ops",
  },
});
