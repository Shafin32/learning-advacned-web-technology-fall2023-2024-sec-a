
import { GetCookieComponent } from "@/components/Cookies/CookiesComponent";
import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import { Metadata } from "next";
import Link from "next/link";
import { IsAdmin } from "@/components/Auth/AuthCheck";
import Logout from "@/components/Auth/Logout";

export const metadata : Metadata = {
  title : 'Profile'
}

export default function Profile(){

    if(IsAdmin()){ 
      return(
        <AdminProfile/>
        );
    }else{
      return(
        <UserProfile/>
        );
    }  
}

export const AdminProfile = () => {
  const user: IUser = GetCookieObject('user');

  return(
    <div className="flex items-center justify-center h-screen bg-gray-500">
    <div className="p-8 bg-white rounded-lg shadow-md">
        {/* <Link href='/subscription/manage' className="text-blue-500 hover:underline">Subscription Manage</Link> <br />
        <Link href='/search' className="text-blue-500 hover:underline">Search User</Link> <br />
        <Link href='/template/manage' className="text-blue-500 hover:underline">Template Manage</Link> <br /> */}
        <Link href='/request/manage' className="text-blue-500 hover:underline">Request Template Manage</Link><br />
        <p className="text-gray-700">Email Is: {decodeURIComponent(user.email)}</p>
        <p className="text-gray-700">Name Is: {user.username}</p>
        <p className="text-gray-700">Role Is: {user.role}</p>
        <Logout/>
    </div>
    </div>
);
}

export const UserProfile = () => {
  const user: IUser = GetCookieObject('user');

  return(
    <div className="flex items-center justify-center h-screen bg-gray-500">
    <div className="p-8 bg-white rounded-lg shadow-md">
        {/* <Link href='/subscription/plans' className="text-blue-500 hover:underline">Subscription Plans</Link> <br />
        <Link href='/payment' className="text-blue-500 hover:underline">Payment Method</Link> <br />
        <Link href='/template/show'  className="text-blue-500 hover:underline">See Template</Link> <br /> */}
        <Link href='/comment' className="text-blue-500 hover:underline">Comments</Link> <br />
        <Link href='/request/all' className="text-blue-500 hover:underline">Request template</Link> <br />
        <p className="text-gray-700">Email Is: {decodeURIComponent(user.email)}</p>
        <p className="text-gray-700">Name Is: {user.username}</p>
        <p className="text-gray-700">Role Is: {user.role}</p>
        <Logout/>
    </div>
</div>

    // <div className="flex items-center justify-center h-screen">
    // <div className="p-4">
    //   <Link href='/subscription/plans' className="text-blue-500 hover:underline">Subscription Plans</Link> <br />
    //   <Link href='/payment' className="text-blue-500 hover:underline">Payment Method</Link> <br />
    //   <Link href='/template/show'  className="text-blue-500 hover:underline">See Template</Link> <br />
    //   <p className="text-gray-700">Email Is: {decodeURIComponent(user.email)}</p>
    //   <p className="text-gray-700">Name Is: {user.username}</p>
    //   <p className="text-gray-700">Role Is: {user.role}</p>
    //   {/* <GetCookieComponent name="token"/> */}
     
    // </div>
    // </div>
);
}
