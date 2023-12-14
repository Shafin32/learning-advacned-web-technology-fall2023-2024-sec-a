import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1>The Lab Exam</h1>
      <Link href="/signup">Sign up</Link> <br/>
      <Link href="/login">Login</Link>
    </main>
  )
}

