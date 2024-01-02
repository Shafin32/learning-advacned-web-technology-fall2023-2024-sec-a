import { GoThere } from "@/components/Route/GoThere";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/profile');
  return (
    <main>
      <h1>Welcome, Our Market Place</h1>
      <GoThere path="/subscription" btnName="Go To Subscription Module"/>
    </main>
  )
}
