import AllComments from "@/components/Comment/CommentAll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'All Comments',
  description: 'A Next Js Project For Final Lab Exam',
}

export default function AllComm() {
    return(
        <>
          <AllComments/>
        </>
    );
}