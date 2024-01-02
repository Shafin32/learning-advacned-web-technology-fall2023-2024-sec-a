import { IfAdmin, IfUser} from "@/components/Auth/AuthCheck";
import Link from "next/link";

export default function Template(){
    return(
        <>
        <Link href='/template/show'>Show All Templates</Link><br />
        <Link href='/template/manage'>Manage Templates</Link><br />
        </>
    );
}