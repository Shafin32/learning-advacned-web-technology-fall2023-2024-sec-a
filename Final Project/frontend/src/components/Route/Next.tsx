'use client'
import { useRouter } from "next/navigation";


export const Next = ({path,btnName}: {path: string, btnName:string}) =>{
    const router = useRouter();
    return(
        <button id="gotoBtn" className="rounded-xl border-2 border-black bg-blue-400 px-4 py-2 my-2 mx-1" onClick={() => router.push(path)}>{btnName}</button>
    );
}