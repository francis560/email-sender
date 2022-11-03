import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";


const Sidebar = () => {

    const router = useRouter();

    return (
        <div className="space-y-3">

            <Button onClick={() => router.push("/")} className="bg-purple-400 py-3 px-5" size="auto" icon={<i className="uil uil-estate text-xl"></i>} />

            <Button onClick={() => router.push("/clients")} className="bg-purple-400 py-3 px-5" size="auto" icon={<i className="uil uil-user-plus text-xl"></i>} />

            <Button onClick={() => router.push("/email")} className="bg-purple-400 py-3 px-5" size="auto" icon={<i className="uil uil-envelope-edit text-xl"></i>} />

        </div>
    );
}


export default Sidebar;