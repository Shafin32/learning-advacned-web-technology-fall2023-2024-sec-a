'use client'
import { SetCookieObject } from "../Cookies/CookiesLocal";
import { GETToken } from "../ApiCalls/GETMethod";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const GotoUserProfile = async(router: AppRouterInstance)=>{
    const Response = await GETToken("http://localhost:3000/profile");
    if(Response.error){
        alert('Something is wrong');
    }
    else{
        await SetCookieObject('user', Response.user);
        // const user = await GetCookieObject('user');   
        // console.log(user);
        router.push(`/profile`);
    }
}
