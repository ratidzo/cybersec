import SignupForm from "@/app/components/SignupForm"
import Link from "next/link"
import Image from "next/image"

const SignupPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center items-center gap-4">
            <div className="md:col-span-2 flex justify-center items-center">
            <p className="text-centr p-2">Already Signed up?</p>
            <Link href={"/auth/signin"}>Sign In</Link>
            </div>
            <SignupForm />
            <Image className="rounded-lg" src="/login.png" alt="Login Form" width={500} height={500} />
        </div>
    )
}

export default SignupPage