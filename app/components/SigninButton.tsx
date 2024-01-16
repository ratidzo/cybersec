"use client"

import { Button } from "@nextui-org/react"
import { useSession } from "next-auth/react"
import Link from "next/link"

const SigninButton = () => {
    const { data:session } = useSession()
    console.log({ session })
    return (
        <div>
            {
                session && session.user ? (
                <>
                    <p>
                    {session.user.firstName} {session.user.lastName}
                    </p>
                    <Link className="text-sky-500 hover:text-sky-600 transition-colors"
                     href={"/api/auth/signout"}>Sign Out</Link>
                 </>
                ):
                (
                   <div className="flex gap-4">
                     <Button as={Link} href={"/api/auth/signin"}>
                        Sign In
                     </Button>
                     <Button as={Link} href={"/auth/signup"}>
                        Sign up
                     </Button>
                   </div>
                )
                 
            }
        </div>
    )
}

export default SigninButton