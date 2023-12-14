"use client"
import Link from 'next/link'
export default function UserProfile({params}){
return(
    <>
        This is profile page. <br />
        <h1>Name: {params.profile[0]}</h1>
        <h1>Password: {params.profile[1]}</h1>
        <Link href="/system">System</Link> <br />
        <Link href="/">Log out</Link>
    </>
);
}