import { lato, poppins } from "../fonts/fonts";
import { GoPlus } from "react-icons/go";
import PageManagement from "../ui/pages/Pagetable";
import { Button } from "@/components/ui/button";


const page = () => {
    return (
        <div className="bg-white shadow rounded p-5">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">
                    <h2 className={`${poppins} antialiased font-medium text-xl`}>Pages</h2>
                    <Button>Add New </Button>
                </div>
                <div className="flex items-center justify-between">
                    <PageManagement />
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default page
