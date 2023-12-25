'use client'
import { useRouter } from "next/navigation";
import React,{useState} from "react";
import { POST } from "../Apicalls/POSTMethod";


interface CommentEntity{
    comment: string; 
}

let Comment : CommentEntity;

export const CommentCreate = () => {

    const [Datas,SetData] = useState(Comment);
    const router = useRouter();

    const handleInput = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;

        SetData({...Datas,[name]: value});
    }


    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await POST('http://localhost:2000/comment/create',Datas);
        //alert(Response.massage);
        alert('successfull');
        router.push('/comment/manage');

    }


    return(
        <form method="post" onSubmit={handleSubmit}>
            Comment: <input type="text" onChange={handleInput} name="comment"/> <br />
            <button type="submit">Create Comment</button>
        </form>
    );
}