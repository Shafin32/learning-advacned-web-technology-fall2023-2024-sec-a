import { CommentCreate } from "@/components/Comment/CreateComment";
import { GoBack } from "@/components/Route/GoBack";

export default function Add(){
    return (
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Add Comment</h1>
          <CommentCreate />
          <GoBack />
        </div>
      );
      
}