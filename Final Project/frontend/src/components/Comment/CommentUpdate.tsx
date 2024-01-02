'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PUT, PUTToken } from "../ApiCalls/PUTMethod";

interface CommentEntity{
    comment: string; 
}

let Comment : CommentEntity;

export const CommentUpdate = ({id}: {id: number})=>{

    const [Datas,SetData] = useState(Comment);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await PUTToken(`http://localhost:3000/comment/update/${id}`,Datas);
        alert(Response.message);
        router.push('/comment/manage');
    }

    return (
        <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" method="post" onSubmit={handleSubmit}>
          <label className="block mb-2">
            Comment:
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              onChange={handleInput}
              name="comment"
            />
          </label>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Update Comment
          </button>
        </form>
      );
      
}