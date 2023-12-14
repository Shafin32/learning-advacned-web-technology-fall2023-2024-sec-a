'use client'

import { useRouter } from "next/navigation";

export default function Signup(){ 
    
    const router = useRouter(); 

    function handleSubmit(event) {
        event.preventDefault();
        router.push(`/login`);
      }
    

    return (
        <form onSubmit={handleSubmit}>
        Name: <input type="text"  name="name"  placeholder="Name" /> <br />   
        Email: <input type="email"  name="email"  placeholder="Email"/> <br />          
        Password: <input type="password"  name="password" placeholder="Create Password"/> <br />
        Phone Number<input type="text"  name="number" placeholder="Phone Number"/> <br />
        Company Name: <input type="text"  name="name"  placeholder="Name" /> <br />
        Date Of Birth<input type="date"  name="dob" /> <br />
    
        <button type="submit">Sign Up</button>
        </form>
    );
}