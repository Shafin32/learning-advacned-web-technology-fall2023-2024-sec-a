import { AddPaymentMethod } from "@/components/Payment/AddPaymentMethod";
import ShowPaymentMethod from "@/components/Payment/ShowPaymentMethod";
import { GoThere } from "@/components/Route/GoThere";

export default function Payment(){
    return(
        <div>
            <ShowPaymentMethod />
            <GoThere path="/payment/add-method" btnName="Add Payment Method"/><br />
            <GoThere path="/payment/update-method" btnName="Update Payment Method"/>
        </div>
    );
}