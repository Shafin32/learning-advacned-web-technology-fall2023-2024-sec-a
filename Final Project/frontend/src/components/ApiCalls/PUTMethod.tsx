import { GetCookie } from "../Cookies/CookiesLocal";

export const PUT = async (url: string, data: object) => {
    try{
    const response = await fetch(url,{
        cache: 'no-cache',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(!response.ok) {
        throw new Error(); 
      }

      const res = await response.json();  
      return res;
    }       

    catch(error){
        return {error: "Something went wrong"};
    }
}

export const PUTToken = async (url: string, data: object) => {
    try{
    const response = await fetch(url,{
        cache: 'no-cache',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${await GetCookie('token')}`  
        },
        body: JSON.stringify(data)
    });

    if(!response.ok) {
        throw new Error(); 
      }

      const res = await response.json();  
      return res;
    }       
    
    catch(error){
        return {error: "Something went wrong"};
    }
}

