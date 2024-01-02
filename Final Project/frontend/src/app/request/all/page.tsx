import { GetCookieObject } from "@/components/Cookies/CookiesLocal";
import RequestAll from "@/components/Request template/RequestAll";
import { GoThere } from "@/components/Route/GoThere";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Request Template',
  description: 'A Next Js Project For Final Lab Exam',
}

export default function Requests() {
    
  const user: IUser = GetCookieObject('user');
  return (
    <>
      <RequestAll user={user} />
      <div className="mt-4">
        <GoThere path="manage/add" btnName="Add" />
      </div>
    </>
  );
  
}

