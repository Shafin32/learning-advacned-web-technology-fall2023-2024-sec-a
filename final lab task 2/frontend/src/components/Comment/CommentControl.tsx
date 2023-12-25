import { useEffect, useState } from "react";
import { GET } from "../Apicalls/GETMethod";
import { Next } from "../Route/Next";
import { DELETE } from "../Apicalls/DELETEMethod";

interface CommentEntity {
    id: number;
    comment: string; 
}


const Comment :  CommentEntity[] = [] ;


export const CommentsControl = ()  => {

    const [Datas,SetData] = useState(Comment);  
  
    useEffect(()=>{
  
      async function fetchData() {
        const Comments = await GET('http://localhost:2000/comment/getall');
        SetData(Comments);
      }
  
      fetchData();
  
    },[Datas])

    return(
        <div>
            <table>
         <thead>
           <tr>
            <th>Id</th>
             <th>Comment</th>
             <th>Update</th>
             <th>Delete</th>
           </tr>
         </thead>
  
         <tbody>
         {Datas.map((Comment: CommentEntity) => (
            <tr key={Comment.id}>
            <td>{Comment.id}</td> 
            <td>{Comment.comment}</td>
            <td><DeleteButton id={`${Comment.id}`}/></td>
            <td><UpdateButton id={`${Comment.id}`}/></td>        
            </tr>
           ))}
         </tbody>
       </table>
        </div>
    );
}

const UpdateButton = ({id}:{id: number}) => {
    return(
      <div>
        <Next path={`manage/${id}`} btnName="Edit"/>
      </div>
    );
  }

  const DeleteButton = ({id}:{id: number}) => {

    const deleteComments = async (id: number) => {
      const Response = await DELETE('http://localhost:2000/comment/delete/${id}');
      alert('Deleted');
    }
  
    return(
      <div>
        <button onClick={async ()=>await deleteComments(id)}>Delete</button>
      </div>
    );
  }
  
  
  export default CommentsControl;