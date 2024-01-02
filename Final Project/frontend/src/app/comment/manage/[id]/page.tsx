import { CommentUpdate } from "@/components/Comment/CommentUpdate";
import { GoBack } from "@/components/Route/GoBack";


export default function Edit({params}:{params: {id: number}}){
    return (
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Update Comment</h1>
          <CommentUpdate id={params.id} />
          <GoBack />
        </div>
      );
      
}