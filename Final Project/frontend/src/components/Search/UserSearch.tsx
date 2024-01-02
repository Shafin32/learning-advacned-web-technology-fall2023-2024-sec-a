'use client'
import { useEffect, useState } from "react";
import { GET, GETToken } from "../ApiCalls/GETMethod";


interface UserEntity {
    id: string;
    username: string;
    email: string;
    gender: String;
    role: string;
    type: string; 
}

const Userentity: UserEntity[]  = []

export const UserSearch = ()  => {

  const [Datas,SetData] = useState(Userentity);  

  
  useEffect(()=>{

    async function fetchData() {
      const Res = await GETToken('http://localhost:3000/user/all');
      SetData(Res);
    }

    fetchData();

  },[])



    return(
      <div> 
        <SearchBar fetch={SetData}/>
        <div>
        <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Gender</th>
             <th>Role</th>
             <th>Type</th>
           </tr>
         </thead>
  
         <tbody>
         {Datas.map((Userentity: UserEntity) => (
            <tr key={Userentity.id}> 
            <td>{Userentity.username}</td>
            <td>{Userentity.email}</td>
            <td>{Userentity.gender}</td>
            <td>{Userentity.role}</td>
            <td>{Userentity.type}</td>
            </tr>
           ))}
         </tbody>
       </table>
        </div>
      </div>


    );
}

export const SearchBar = ({fetch}: {fetch: any}) =>{

  const [Datas,SetData] = useState();

  const handleInput = (e:any) => {
    const value = e.target.value; 
    console.log(value);
    SetData(value);
}

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const Response = await GETToken(`http://localhost:3000/search/user/${Datas}`);
    fetch(Response);

}

if(Datas != ''){
  return(
    <div>
      <form method="post" onSubmit={handleSubmit}>
            <input type="text"  name="search" onChange={handleInput}/>   
            <button type="submit">Search</button>
        </form>
    </div>
  );
}else{
  return(
    <div>
      <form method="post">
            <input type="text"  name="search" onChange={handleInput}/>   
            <button type="submit">Search</button>
        </form>
    </div>
  );
}
}

export default UserSearch;