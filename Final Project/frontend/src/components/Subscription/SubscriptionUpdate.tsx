'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PUT } from "../ApiCalls/PUTMethod";

interface SubscriptionEntity {
    type: string; 
    download_limit: string;
    price: String;
}

let Subscription : SubscriptionEntity;

export const SubscriptionUpdate = ({id}: {id: string})=>{

    const [Datas,SetData] = useState(Subscription);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await PUT(`http://localhost:3000/subscription/update/${id}`,Datas);
        alert(Response.message);
        router.push('/subscription/manage');
    }

    return(
        <form method="post" onSubmit={handleSubmit}>
            Subscription Type: <input type="text" onChange={handleInput} name="type"/> <br />
            Download Limit: <input type="number" onChange={handleInput} name="download_limit"/> <br />
            Price: <input type="number" onChange={handleInput} name="price"/> <br />
            <button type="submit">Update Subscription</button>
        </form>
    );
}

