import { IfAdmin, IsAdmin } from "@/components/Auth/AuthCheck";
import RequestManage from "@/components/Request template/RequestManage";
import { GoThere } from "@/components/Route/GoThere";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'Request Manage'
}

export default function Manage() {
  return (
    <>
      <RequestManage />
      <div className="mt-4">
        <GoThere path="/profile" btnName="Go Back To Profile" />
      </div>
    </>
  );
  
}