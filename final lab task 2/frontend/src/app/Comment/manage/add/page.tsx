import { CommentCreate } from "@/components/Comment/CreateComment";
import { Back } from "@/components/Route/Back";

export default function Add(){
    return(
        <div>
            <h1>Add Comments</h1>
            <CommentCreate/>
            <Back/>
        </div>
    );
}