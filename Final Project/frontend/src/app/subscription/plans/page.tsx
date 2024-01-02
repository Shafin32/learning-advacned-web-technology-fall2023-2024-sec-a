import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import SubscriptionPlans from "@/components/Subscription/SubscriptionPlans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Subscription Plan',
  description: 'A Next Js Project For Final Lab Exam',
}

export default function Plans() {

    const user: IUser = GetCookieObject('user');
    return(
        <>
          <SubscriptionPlans user={user}/>
        </>
    );
}