import CommentsControl from "@/components/Comment/CommentControl";
import { GoThere } from "@/components/Route/GoThere";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: 'Comment Manage'
}


export default function Manage() {
  return (
    <>
      <div className="max-w-2xl mx-auto p-4">
        <CommentsControl />
        <div className="flex justify-between mt-4">
          <GoThere path="manage/add" btnName="Add" />
          <GoThere path="/comment" btnName="Go Back Comment Module" />
        </div>
      </div>
    </>
  );
  
}