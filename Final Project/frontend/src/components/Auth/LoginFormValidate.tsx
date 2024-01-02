'use client'

import LoginSchema from "@/Schemas/zod/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { POST } from "../ApiCalls/POSTMethod";
import { SetCookie } from "../Cookies/CookiesLocal";
import {GotoUserProfile} from "../Profile/UserProfile";


type input = z.infer<typeof LoginSchema>

export const LoginFormValidate = ()=> {

    const router = useRouter();
    const {register, formState : {errors}, handleSubmit, reset} = useForm<input>({
        resolver: zodResolver(LoginSchema)
    });
    
    const processForm = async (formData:input) => {
        console.log(formData);

        const Response = await POST('http://localhost:3000/auth/login',formData);
        if(Response.error){
            alert(Response.error);
        }
        else{
            await SetCookie('token',Response.token);
            console.log(Response.token);
            await GotoUserProfile(router);
        }

    }

    return(
<form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" method="post" onSubmit={handleSubmit(processForm)}>   
    <div className="mb-4">
        <label htmlFor="user-email" className="text-gray-600 block">Email:</label>
        <input 
            id="user-email" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
            type="email" 
            placeholder="Type Email" 
            {...register('username')}
        /> 
        {errors.username?.message && <p className='text-red-500 text-sm mt-1'>{errors.username.message}</p>}
    </div>

    <div className="mb-4">
        <label htmlFor="user-password" className="text-gray-600 block">Password:</label>
        <input 
            id="user-password" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" 
            type="password" 
            placeholder="Type Password" 
            {...register('password')}
        />
        {errors.password?.message && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    </div>
    
    <button className="w-full bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange" type="submit">
        Submit
    </button>
</form>

    );
}


