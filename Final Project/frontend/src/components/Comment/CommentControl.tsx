'use client'

import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";
import { Next } from "../Route/Next";
import { DELETE, DELETEToken } from "../ApiCalls/DELETEMethod";

interface CommentEntity {
    id: number;
    comment: string; 

}


const Comment :  CommentEntity[] = [] ;


export const CommentsControl = ()  => {

    const [Datas,SetData] = useState(Comment);  
  
    useEffect(()=>{
  
      async function fetchData() {
        const Comments = await GETToken('http://localhost:3000/comment/getall');
        SetData(Comments);
      }
  
      fetchData();
  
    },[])

    return (
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">Comment</th>
              <th className="py-2 px-4 border-b">Delete</th>
              <th className="py-2 px-4 border-b">Update</th>
            </tr>
          </thead>
  
          <tbody>
            {Datas.map((Comment: CommentEntity) => (
              <tr key={Comment.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{Comment.id}</td>
                <td className="py-2 px-4 border-b">{Comment.comment}</td>
                <td className="py-2 px-4 border-b">
                  <DeleteButton id={`${Comment.id}`} />
                </td>
                <td className="py-2 px-4 border-b">
                  <UpdateButton id={`${Comment.id}`} />
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
        <Next path={`manage/${id}`} btnName="Edit"/>
      </div>
    );
  }

  const DeleteButton = ({id}:{id: string}) => {

    const deleteComments = async (id: string) => {
      const Response = await DELETEToken(`http://localhost:3000/comment/delete/${id}`);
      alert(Response.message);
    }
  
    return(
      <div>
        <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
        onClick={async ()=>await deleteComments(id)}>Delete</button>
      </div>
    );
  }
  
  
  export default CommentsControl;