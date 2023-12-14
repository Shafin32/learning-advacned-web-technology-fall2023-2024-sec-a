'use client'
import { useRouter } from "next/navigation";

export default function System(){
    const router = useRouter();
    return(
        <div>
            This is System Page. <br />
            <button onClick={()=>router.push('/system/sales')}>Check Out Sales</button>
        </div>
    );
}