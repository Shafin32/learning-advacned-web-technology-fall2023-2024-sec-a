import Link from 'next/link'
export default function Profile(){
    return(
        <div>
            This is profile page. <br />
            <Link href="/system">System</Link> <br />
            <Link href="/">Log out</Link>
        </div>
    );
}