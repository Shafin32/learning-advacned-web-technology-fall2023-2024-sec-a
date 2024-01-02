'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";

interface TemplateEntity {
    id: string;
    name: string; 
    features: string;
    url: String;
}

const Template: TemplateEntity[]  = []

export const TemplateShow = ()  => {

  const [Datas,SetData] = useState(Template);  

  
  useEffect(()=>{

    async function fetchData() {
      const Template = await GETToken('http://localhost:3000/template/all');
      SetData(Template);
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
             <th>Show</th>
           </tr>
         </thead>
  
         <tbody>
         {Datas.map((Template: TemplateEntity) => (
            <tr key={Template.id}> 
            <td>{Template.name}</td>
            <td>{Template.features}</td>
            <td>{Template.url}</td>
            <td><Show/></td>
            </tr>
           ))}
         </tbody>
       </table>
        </div>
    );
}

export const Show = () => {
  return(
    <div>
      <button className="rounded-xl border-2 border-black bg-blue-400 px-4 py-2 my-2 mx-1 ">Show</button>
    </div>
  );
}


export default TemplateShow;