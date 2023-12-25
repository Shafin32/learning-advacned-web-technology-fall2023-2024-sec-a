import CommentsControl from "@/components/Comment/CommentControl";
import { Next } from "@/components/Route/Next";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Comment Manage'
  }
  
  
  export default function Manage() {
      return(
          <>
            <CommentsControl/>
            <Next path="manage/add" btnName="Add"/><br />
          </>
      );
  }