import { GoBack } from "@/components/Route/GoBack";
import { SubscriptionCreate } from "@/components/Subscription/SubscriptionCreate";

export default function Add(){
    return(
        <div>
            <h1>Add Subscription</h1>
            <SubscriptionCreate/>
            <GoBack/>
        </div>
    );
}