'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { GoThere } from "../Route/GoThere";
import { DELETEToken } from "../ApiCalls/DELETEMethod";

interface RequestEntity {
    id: number;
    tmpname: string; 
    catagory: string;
    description: String;

}

const RequestTemplate: RequestEntity[]  = []

export const RequestManage =  ()  => {

  const [Datas,SetData] = useState(RequestTemplate);  

  useEffect(()=>{

    async function fetchData() {
      const req = await GETToken('http://localhost:3000/request/getall');
      SetData(req);
    }

    fetchData();

  },[Datas])

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Template Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Update</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>

        <tbody>
          {Datas.map((req: RequestEntity) => (
            <tr key={req.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{req.tmpname}</td>
              <td className="py-2 px-4 border-b">{req.catagory}</td>
              <td className="py-2 px-4 border-b">{req.description}</td>
              <td className="py-2 px-4 border-b">
                <UpdateButton id={`${req.id}`} />
              </td>
              <td className="py-2 px-4 border-b">
                <DeleteButton id={`${req.id}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


const UpdateButton = ({id}:{id: string}) => {
    return(
      <div className="mt-2">
        <GoThere path={`manage/${id}`} btnName="Edit"/>
      </div>
    );
  }
  
  
  const DeleteButton = ({id}:{id: string}) => {
  
      const deleteRequests = async (id: string) => {
      const Response = await DELETEToken(`http://localhost:3000/request/delete/${id}`);
      alert(Response.message);
    }
  
    return(
      <div>
        <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
         onClick={async ()=>await deleteRequests(id)}>Delete</button>
      </div>
    );
  }
  
  
  export default RequestManage;