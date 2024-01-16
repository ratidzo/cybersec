"use server"

import { User } from "@prisma/client"
import prisma from "../prisma"
import * as bycrypt from "bcrypt"

export async function registerUser(user: Omit< User, "id" | "emailVerified" | "image" >) {
    const result = await prisma.user.create({
        data: {
            ...user,
            password: await bycrypt.hash(user.password, 10),
        },
    })
}