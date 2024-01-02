import { LoginFormValidate } from "@/components/Auth/LoginFormValidate";

export const metadata = {
    title: "Login",
    description: "This is login page"
}

export default function Login(){
    return(
        <>
            <div className="max-w-md mx-auto p-6 bg-white3 mb-8">
            <h1 className="text-3xl font-bold text-blue-500 mb-4">Login Form</h1>
                <LoginFormValidate/>
            </div>   
        </>
    );
}