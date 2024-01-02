'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";

interface PaymentMethodEntity {
    id: string;
    cardno: string; 
    cvc: string;
    expdate: String;
}


export const ShowPaymentMethod = ()  => {

  const [Datas,SetData] = useState<PaymentMethodEntity>();  

    useEffect(()=>{

    async function fetchData() {
        const PaymentMethod = await GETToken('http://localhost:3000/payment/method/user');
        
        if(PaymentMethod.error){
            alert("Payment Method is not added!!");}      
        else{
        SetData(PaymentMethod);}
    }

    fetchData();

    },[])

    if(Datas != null){
    return(
        <div>
            Card No: {Datas?.cardno} <br/>
            CVC: {Datas?.cvc} <br/>
            Expite Date: {Datas?.expdate}
        </div>
    );
    }else{
        return(
            <div>No Payment Method Added</div>
        );
    }

}


export default ShowPaymentMethod;