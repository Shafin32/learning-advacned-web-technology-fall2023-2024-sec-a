import { CommentUpdate } from "@/components/Comment/CommentUpdate";
import { Back } from "@/components/Route/Back";

export default function Edit({params}:{params: {id: number}}){
    return(
        <div>
            <h1>Update Comment</h1>
            <CommentUpdate id={params.id}/>
            <Back/>
        </div>
    );
}