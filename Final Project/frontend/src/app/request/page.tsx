import { IfAdmin, IfUser} from "@/components/Auth/AuthCheck";
import Link from "next/link";

export default function Request(){

    IfAdmin();

    return (
        <>
          <Link href="/request/all" className="text-blue-500 hover:underline block mb-2">
            Show All Requests
          </Link>
          <Link href="/request/manage" className="text-blue-500 hover:underline block">
            Manage Request Template
          </Link>
        </>
      );
      

}