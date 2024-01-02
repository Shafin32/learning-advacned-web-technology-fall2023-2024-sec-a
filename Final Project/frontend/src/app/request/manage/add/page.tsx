import { RequestCreate } from "@/components/Request template/RequestCreate";
import { GoBack } from "@/components/Route/GoBack";

export default function Add(){
    return (
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Add Request</h1>
          <RequestCreate />
          <GoBack />
        </div>
      );
      
}