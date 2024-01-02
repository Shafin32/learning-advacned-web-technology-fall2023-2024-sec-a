'use client'
import { useRouter } from "next/navigation";
import { DeleteCookie } from "../Cookies/CookiesLocal";

export const Logout = () => {

    const router = useRouter();
    const DeleteProcess = async () => {
        DeleteCookie('user');
        DeleteCookie('token');
        router.push('/login');
    }  

    return(
        <div>
            <button className="bg-red-500 rounded-xl py-1 px-2" onClick={()=>DeleteProcess()}>Logout</button>
        </div>
    );
}

export default Logout; 