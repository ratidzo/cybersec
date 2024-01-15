"use client"

import { Checkbox, Input, Button } from "@nextui-org/react"
import { UserIcon, EnvelopeIcon, PhoneIcon, KeyIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import Link from "next/link"
import { z } from "zod"
import validator from "validator"
import { Controller, SubmitHandler, useForm } from "react-hook-form"

// create our form schema
const FormSchema = z.object({
    firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(45, "First name must be less than 45 characters")
    .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),

    lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(45, "Last name must be less than 45 characters")
    .regex(new RegExp("^[a-zA-Z]+$"), "No special character allowed!"),

    email: z
    .string().email("Please enter a valid email address"),

    phone: z
    .string().refine(validator.isMobilePhone, "Please enter a valid phone number."),

    password: z
    .string().min(6, "Password must be at least 6 characters.")
    .max(50, "Password must be less than 50 characters"),

    confirmPassword: z
    .string().min(6, "Password must be at least 6 characters.")
    .max(50, "Password must be less than 50 characters"),

    accepted: z
    .literal(true, {
        errorMap: () => ({
            message: "Please accept all terms."
        })
    })

}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["password", "confirmPassword"]
})

type InputType = z.infer<typeof FormSchema>

const SignupForm = () => {
    const {register, handleSubmit, reset, control } = useForm<InputType>()
    const [isVisiblePass, setIsVisiblePass] = useState(false)
    const toggleVisiblePass = () => setIsVisiblePass(!isVisiblePass)
    const saveUser: SubmitHandler<InputType> = async (data) => {
        console.log({data})
    }
    return (
        <form onSubmit={handleSubmit(saveUser)} className="grid grid-cols-2 place-self-stretch gap-3 p-2 shadow border rounded-md">
            <Input 
            {...register("firstName")} 
            label="First Name" 
            startContent={<UserIcon className="w-4" /> }
            />
            <Input 
            {...register("lastName")} 
            label="Last Name" 
            startContent={<UserIcon className="w-4" /> }
            />
            <Input 
             {...register("email")}
             className="col-span-2"
             label="Email" 
             startContent={<EnvelopeIcon className="w-4" /> }
             />
            <Input 
             {...register("phone")}
             className="col-span-2"
             label="Phone" 
             startContent={<PhoneIcon className="w-4" /> }
             />
             <Input
             {...register("password")}
             className="col-span-2"
             type={isVisiblePass ? "text": "password"}
             label="Password" 
             startContent={<KeyIcon className="w-4" /> }
             endContent={
                isVisiblePass? <EyeSlashIcon className="w-4 cursor-pointer" onClick={toggleVisiblePass}/>:
                <EyeIcon className="w-4 cursor-pointer" onClick={toggleVisiblePass} />
             }
             />
             <Input
             {...register("confirmPassword")}
             className="col-span-2"
             type={isVisiblePass ? "text": "password"}
             label="Confirm Password" 
             startContent={<KeyIcon className="w-4" /> }             
             />
             <Controller
                control={control}
                name="accepted"
                render={({ field }) => (
                    <Checkbox 
                        onChange={field.onChange} onBlur={field.onBlur}
                        className="col-span-2">I Accept The <Link href={"/terms"}>Terms</Link></Checkbox>
                )} />
             
             <div className="col-span-2 py-2 flex justify-center">
                <Button className="w-48" color="primary" type="submit">Submit</Button>
             </div>
        </form>
    )
}

export default SignupForm