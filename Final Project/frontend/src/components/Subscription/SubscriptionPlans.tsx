'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { GetCookieObject, SetCookieObject } from "../Cookies/CookiesLocal";
import { useRouter } from "next/navigation";

interface SubscriptionEntity {
    id: string;
    type: string; 
    download_limit: string;
    price: String;
}

const Subscription: SubscriptionEntity[]  = []

export const SubscriptionPlans = ({user}: {user : IUser})  => {

  const [Datas,SetData] = useState(Subscription);  

  
  useEffect(()=>{

    async function fetchData() {
      const Subscriptions = await GETToken('http://localhost:3000/subscription/all');
      SetData(Subscriptions);
    }

    fetchData();

  },[])

    return(
        <div>
            <table>
         <thead>
           <tr>
             <th>Type</th>
             <th>Download Limit</th>
             <th>Price</th>
             <th>Subscribe</th>
           </tr>
         </thead>
  
         <tbody>
         {Datas.map((Subscription: SubscriptionEntity) => (
            <tr key={Subscription.id}> 
            <td>{Subscription.type}</td>
            <td>{Subscription.download_limit}</td>
            <td>{Subscription.price}</td>
            <td><Subscribe user={user} Subscription={Subscription}/></td>
            </tr>
           ))}
         </tbody>
       </table>
        </div>
    );
}

export const Subscribe = ({user,Subscription}:{Subscription: SubscriptionEntity,user: IUser}) => {

  const Router = useRouter();
  
  const processSubscription = async (id: string) => {
    const Subscription = await GETToken(`http://localhost:3000/subscription/subscribe/${id}`);
    alert(Subscription.message);
    //Update User Data inside cookies
    
    const Response = await GETToken("http://localhost:3000/profile");
    await SetCookieObject('user', Response.user);
    Router.refresh();
  }

  if(user.type === Subscription.type){
    return(
      <div>Active</div>
    );
  }
  else{
  return(
    <div>
      <button onClick={async ()=>await processSubscription(Subscription.id)}>Subscribe</button>
    </div>
  );
  }
}


export default SubscriptionPlans;