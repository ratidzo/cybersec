"use client"

import { Checkbox, Input, Button } from "@nextui-org/react"
import { UserIcon, EnvelopeIcon, PhoneIcon, KeyIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import Link from "next/link"


const SignupForm = () => {
    const [isVisiblePass, setIsVisiblePass] = useState(false)
    const toggleVisiblePass = () => setIsVisiblePass(!isVisiblePass)
    return (
        <form className="grid grid-cols-2 place-self-stretch gap-3 p-2 shadow border rounded-md">
            <Input label="First Name" startContent={<UserIcon className="w-4" /> }/>
            <Input label="Last Name" startContent={<UserIcon className="w-4" /> }/>
            <Input
             className="col-span-2"
             label="Email" startContent={<EnvelopeIcon className="w-4" /> }/>
            <Input
             className="col-span-2"
             label="Phone" startContent={<PhoneIcon className="w-4" /> }/>
             <Input
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
             className="col-span-2"
             type={isVisiblePass ? "text": "password"}
             label="Confirm Password" 
             startContent={<KeyIcon className="w-4" /> }             
             />
             <Checkbox className="col-span-2">I Accept The <Link href={"/terms"}>Terms</Link></Checkbox>
             <div className="col-span-2 py-2 flex justify-center">
                <Button className="w-48" color="primary" type="submit">Submit</Button>
             </div>
        </form>
    )
}

export default SignupForm