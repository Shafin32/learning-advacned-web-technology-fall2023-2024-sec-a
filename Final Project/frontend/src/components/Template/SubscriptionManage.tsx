'use client'
import { useEffect, useState } from "react";
import { GETToken } from "../ApiCalls/GETMethod";
import { DELETE, DELETEToken } from "../ApiCalls/DELETEMethod";
import { useRouter } from "next/navigation";
import { GoThere } from "../Route/GoThere";

interface TemplateEntity {
  id: string;
  name: string; 
  features: string;
  url: String;
}
const Template: TemplateEntity[]  = []

export const TemplateManage = ()  => {

  const [Datas,SetData] = useState(Template);  

  useEffect(()=>{

    async function fetchData() {
      const Response = await GETToken('http://localhost:3000/Template/all');
      SetData(Response);
    }

    fetchData();

  },[])

  return(
    <div>
        <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Features</th>
         <th>Url</th>

       </tr>
     </thead>

     <tbody>
     {Datas.map((Template: TemplateEntity) => (
        <tr key={Template.id}> 
        <td>{Template.name}</td>
        <td>{Template.features}</td>
        <td>{Template.url}</td>
        </tr>
       ))}
     </tbody>
   </table>
    </div>
);
}

const UpdateButton = ({id}:{id: string}) => {
  return(
    <div>
      <GoThere path={`manage/${id}`} btnName="Edit"/>
    </div>
  );
}


const DeleteButton = ({id,fetch}:{id: string,fetch: any}) => {

  // Delete a row
  const deleteTemplates = async (id: string) => {
    const Response = await DELETEToken(`http://localhost:3000/Template/delete/${id}`);
    alert(Response.message);
    await fetchData();
  }

  // Update the table after delete a row
  async function fetchData() {
    const Response = await GETToken('http://localhost:3000/Template/all');
    fetch(Response);
  }

  return(
    <div>
      <button onClick={async ()=>await deleteTemplates(id)}>Delete</button>
    </div>
  );
}


export default TemplateManage;