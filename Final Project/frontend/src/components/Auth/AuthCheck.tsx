import { redirect } from "next/navigation";
import { GetCookieObject } from "../Cookies/CookiesLocal";

export const IfAdmin = () =>{
    const user: IUser = GetCookieObject('user')
    
    if(user){
        if(user.role !== 'admin'){
            redirect('/profile');
        }
    }
    else{
        redirect('/login');
    }

}

export const IfUser = () =>{
    const user: IUser = GetCookieObject('user')
    
    if(user){
        if(user.role !== 'user'){
            redirect('/profile');
        }
    }
    else{
        redirect('/login');
    }

}

export const IfAny = () =>{
    const user: IUser = GetCookieObject('user')
    
    if(!user){
        redirect('/login');
    }
}

export const IsAdmin = (): boolean =>{
    const user: IUser = GetCookieObject('user')
    
    if(user){
        if(user.role === 'admin'){
           return true;
        }else{
            return false;
        }
    }
    else{
        redirect('/login');
    }
}

export const IsUser = (): boolean =>{
    const user: IUser = GetCookieObject('user')
    
    if(user){
        if(user.role === 'user'){
           return true;
        }else{
            return false;
        }
    }
    else{
        redirect('/login');
    }
}