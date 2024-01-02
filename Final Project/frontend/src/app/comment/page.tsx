import { IfAdmin, IfUser} from "@/components/Auth/AuthCheck";
import Link from "next/link";

export default function Comment(){

    IfUser();

    return (
        <>
          <Link href="/comment/allComments" className="text-blue-500 hover:underline block mb-2">
            Show All Comments
          </Link>
          <Link href="/comment/manage" className="text-blue-500 hover:underline block">
            Manage Comment
          </Link>
        </>
      );
      
}