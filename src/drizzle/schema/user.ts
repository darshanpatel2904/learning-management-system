import { pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelpers";

export const userRoles = ["user", "admin"] as const;
export type UserRole = (typeof userRoles)[number];
export const userRoleEnum = pgEnum("user_role", userRoles);

export const UserTable = pgTable("users", {
  id,
  clerkUserId: text().notNull().unique(),
  name: text().notNull(),
  email: text().notNull(),
  role: userRoleEnum().notNull().default("user"),
  imageUrl: text(),
  deleteAt: timestamp({ withTimezone: true }),
  createdAt,
  updatedAt,
});
