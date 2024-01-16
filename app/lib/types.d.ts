import { User } from "@prisma/client"

// Set session user type to prisma's user type.
declare module "next-auth"{
    interface Session{
        user:User
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user:User
    }
}