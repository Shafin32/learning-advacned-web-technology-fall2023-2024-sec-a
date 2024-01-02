'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { useRouter } from "next/navigation";
import { SetCookieObject } from "../Cookies/CookiesLocal";

interface CommentEntity {
    id: number;
    comment: string; 

}

const Comment: CommentEntity[]  = []

export const AllComments =  ()  => {

  const [Datas,SetData] = useState(Comment);  

  useEffect(()=>{

    async function fetchData() {
      const comm = await GETToken('http://localhost:3000/comment/getall');
      SetData(comm);
    }

    fetchData();

  },[])

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="p-3 border-b">Comment</th>
          </tr>
        </thead>
  
        <tbody>
          {Datas.map((com: CommentEntity) => (
            <tr key={com.id} className="hover:bg-gray-100">
              <td className="p-3 border-b">{com.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}


export default AllComments;