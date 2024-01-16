import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

interface Props {
    callbackUrl?: string
}

const FormSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string({
        required_error: "Please enter your password"
    })
})

type InputType = z.infer<typeof FormSchema>

const SigninForm = (props: Props) => {
    const {register, handleSubmit, formState: {errors}} = useForm<InputType>({
        resolver: zodResolver(FormSchema)
    })
    return (
        <form className="flex flex-col gap-2">
            <Input 
             label="Email" 
             {...register("email")} 
             errorMessage={errors.email?.message} />
            <Input 
             label="Password" 
             {...register("email")} 
             errorMessage={errors.password?.message} />
        </form>
    )
}

export default SigninForm