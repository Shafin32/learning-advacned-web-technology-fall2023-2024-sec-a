import { RequestUpdate } from "@/components/Request template/RequestUpdate";
import { GoBack } from "@/components/Route/GoBack";


export default function Edit({params}:{params: {id: string}}){
    return (
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Update Request</h1>
          <RequestUpdate id={params.id} />
          <GoBack />
        </div>
      );
      
}