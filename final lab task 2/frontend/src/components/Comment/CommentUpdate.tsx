'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PUT } from "../Apicalls/PUTMethod";

interface CommentEntity{
    comment: string; 
}

let comment : CommentEntity;

export const CommentUpdate = ({id}: {id: number})=>{

    const [Datas,SetData] = useState(comment);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await PUT('http://localhost:2000/comment/update/${id}',Datas);
        alert('updated');
        router.push('/comment/manage');
    }

    return(
        <form method="post" onSubmit={handleSubmit}>
            Comment: <input type="text" onChange={handleInput} name="comment"/> <br />
            <button type="submit">Update Comment</button>
        </form>
    );
}