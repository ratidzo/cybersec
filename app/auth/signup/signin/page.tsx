import SigninForm from "@/app/components/SigninForm"
import Link from "next/link"


const SigninPage = () => {
    return (
        <div>
            <SigninForm />
            <Link href={"/auth/forgotPass"}>Forgot Your Password?</Link>
        </div>
    )
}

export default SigninPage