'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { useRouter } from "next/navigation";
import { SetCookieObject } from "../Cookies/CookiesLocal";

interface RequestEntity {
    type: string;
    id: number;
    tmpname: string; 
    catagory: string;
    description: String;

}

 const RequestTemplate: RequestEntity[]  = []

export const RequestAll = ({user}: {user : IUser})   => {

   const [Datas,SetData] = useState(RequestTemplate);  

   useEffect(()=>{

    async function fetchData() {
      const req = await GETToken('http://localhost:3000/request/getall');
      SetData(req);
    }

    fetchData();

  },[])

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Template Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
  
        <tbody>
          {Datas.map((req: RequestEntity) => (
            <tr key={req.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{req.tmpname}</td>
              <td className="py-2 px-4 border-b">{req.catagory}</td>
              <td className="py-2 px-4 border-b">{req.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}


export default RequestAll;






  