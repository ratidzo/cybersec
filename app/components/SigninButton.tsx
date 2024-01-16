"use client"

import { Button } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import Link from "next/link"

const SigninButton = () => {
    const { data:session } = useSession()
    return (
        <div>
            {
                session && session.user ? (
                <>
                    <p>
                    {session.user.email}
                    </p>
                    <Link className="text-sky-500 hover:text-sky-600 transition-colors"
                     href={"/api/auth/signout"}>Sign Out</Link>
                 </>
                ):
                (
                    <Button as={Link} href={"/api/auth/signin"}>Sign In</Button>
                )
                 
            }
        </div>
    )
}

export default SigninButton