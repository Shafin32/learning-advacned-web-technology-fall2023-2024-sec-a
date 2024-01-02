'use client'

import { useState } from "react";
import { PUT, PUTToken } from "../ApiCalls/PUTMethod";
import { useRouter } from "next/navigation";

interface RequestEntity {
    tmpname: string; 
    catagory: string;
    description: String;

}

let RequestTemplate : RequestEntity;


export const RequestUpdate = ({id}: {id: string})=>{

    const [Datas,SetData] = useState(RequestTemplate);
    const router = useRouter();

    const handleInput = (e:any) => {

        const name = e.target.name;
        const value = e.target.value; 

        SetData({...Datas, [name]: value});
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const Response = await PUTToken(`http://localhost:3000/request/update/${id}`,Datas);
        alert(Response.message);
        router.push('/request/manage');
    }

    return (
        <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" method="post" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Template Name:
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              onChange={handleInput}
              name="tmpname"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category:
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              onChange={handleInput}
              name="catagory"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description:
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              onChange={handleInput}
              name="description"
            />
          </label>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Create New Template Request
          </button>
        </form>
      );
      
}

