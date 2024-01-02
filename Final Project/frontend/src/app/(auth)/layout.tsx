import Link from "next/link";

export default function AuthLayout({children}:{children:any}){
    return(
        <div className=" flex flex-col  mb-4">
        <Link className="text-sky-500 mr-4" href={'/login'}>Login</Link>
        <Link className="text-sky-500" href={'/signup'}>Signup</Link>
        {children}
    </div>
    );
}