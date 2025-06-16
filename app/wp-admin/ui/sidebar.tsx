
import NavLinks from "./navLinks"
import { poppins } from "../fonts/fonts"
import Link from "next/link"
import clsx from "clsx"
// import { usePathname } from "next/navigation"
import { Settings,Rss, Monitor,LogOut } from "@deemlol/next-icons";
import { useAuth } from "@/app/context/auth";


export default function (){
    const {logout} = useAuth();
    // const pathname = usePathname();
    return (
        <div className=" flex flex-col gap-5 shadow p-2.5 bg-white min-w-44">
            <div className="bg-blue-500 rounded text-white p-2.5"><h1 className="font-bold "><Monitor className="w-[20px]" />Web Solutions</h1></div>
            <div><NavLinks /></div>
            <div className="flex-grow"></div>
            <div> 
                <ul className="flex flex-col gap-0.5">
                    <li><Link href='#' className='flex justify-start items-center text-[14px] font-medium py-2 px-1.5 hover:bg-blue-100 hover:text-blue-900 border-l-3 border-white hover:border-blue-900 rounded gap-2'><Settings className="w-[18px]"/>Settings</Link></li>
                    <li><Link href='#' className='flex justify-start items-center text-[14px] font-medium py-2 px-1.5 hover:bg-blue-100 hover:text-blue-900 border-l-3 border-white hover:border-blue-900 rounded gap-2'><Rss className="w-[18px]" />Support</Link></li>
                </ul>
            </div>

            <div className={`${poppins} antialiased flex gap-2.5 rounded border-l-3 border-red-900 font-medium text-red-900 bg-red-100 px-1.5 py-2 cursor-pointer`} onClick={logout}><LogOut className="w-[18px]"/> Log Out</div>
        </div>
    )
}