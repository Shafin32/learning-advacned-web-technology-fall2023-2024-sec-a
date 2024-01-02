import { GoBack } from "@/components/Route/GoBack";
import { SubscriptionUpdate } from "@/components/Subscription/SubscriptionUpdate";


export default function Edit({params}:{params: {id: string}}){
    return(
        <div>
            <h1>Update Subscription</h1>
            <SubscriptionUpdate id={params.id}/>
            <GoBack/>
        </div>
    );
}