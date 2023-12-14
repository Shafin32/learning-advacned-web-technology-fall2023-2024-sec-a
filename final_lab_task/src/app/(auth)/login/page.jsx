'use client'

import { useRouter } from "next/navigation";

useRouter
export default function Login(){

    const router = useRouter(); 
    
    function handleSubmit(event) {
        event.preventDefault();
      
        const email = event.target.email.value;
        const password = event.target.password.value;
      
        router.push(`/profile/${email}/${password}`);
      }

    return(
        <form onSubmit={handleSubmit}>
            Email: <input type="text" name="email" />
            Password: <input type="text" name="password" />
            <button>Submit</button>
        </form>
    );
}