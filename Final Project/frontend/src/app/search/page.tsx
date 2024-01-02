import { IfAdmin, IfUser} from "@/components/Auth/AuthCheck";
import UserSearch from "@/components/Search/UserSearch";
import Link from "next/link";

export default function Search(){

    IfAdmin();

    return(
        <UserSearch/>
    );
}