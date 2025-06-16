import { lato, poppins } from "../fonts/fonts";
import { GoPlus } from "react-icons/go";
import PageManagement from "../ui/pages/Pagetable";


const page = () => {
    return (
        <div className="bg-white shadow rounded p-5">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2.5">
                    <h2 className={`${poppins} antialiased font-medium text-xl`}>Pages</h2>
                    <button className={`${lato} antialiased flex items-center justify-center gap-2 font-medium text-[12px] border-l-3 shadow rounded px-5 cursor-pointer py-2 hover:bg-blue-100 hover:text-blue-900 hover:border-l-3 hover:border-blue-900`}><GoPlus />Add New</button>
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
