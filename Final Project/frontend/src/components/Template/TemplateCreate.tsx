'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { POSTToken } from "../ApiCalls/POSTMethod";

interface SubscriptionEntity {
    type: string; 
    download_limit: string;
    price: String;
}

let Subscription : SubscriptionEntity;


export const TemplateCreate = ()=>{

    const [Datas,SetData] = useState(Subscription);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await POSTToken('http://localhost:3000/subscription/create',Datas);
        alert(Response.message);
        console.log(Response.message);
        router.push('/subscription/manage');
    }

    return(
        <form method="post" onSubmit={handleSubmit}>
            Subscription Type: <input type="text" onChange={handleInput} name="type"/> <br />
            Download Limit: <input type="number" onChange={handleInput} name="download_limit"/> <br />
            Price: <input type="number" onChange={handleInput} name="price"/> <br />
            <button type="submit">Create New Subscription</button>
        </form>
    );
}

