'use client'
import { useRouter } from "next/navigation";
import React,{useState} from "react";
import { POST, POSTToken } from "../ApiCalls/POSTMethod";


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
        const Response = await POSTToken('http://localhost:3000/comment/create',Datas);
        alert(Response.message);
        router.push('/comment/manage');

    }


    return (
        <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" method="post" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            Create Comment
          </button>
        </form>
      );
      
}