import { UserRoles } from "enums";

export type UserProfile = {
  id: string | null,
  first_name: string | null,
  last_name: string | null,
  photo: string | null,
  role_name: UserRoles | null,
}