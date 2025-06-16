import Image from "next/image";
import Link from "next/link";
import contentCreator from '@/public/FrontendImg/contentCreator_fullwhite.svg'
import '@/app/(frontendPages)/components/ui/headerfooter/HeaderFooter.css'
import NavLinks from "./NavLinks";
import { Button } from "@mui/material";
import { Search } from "@deemlol/next-icons";

const header = () => {
    return (
        <div>
            <div className="p-2.5 bg-[rgba(0,0,0,.5)] backdrop-blur-[5px] z-10 relative">
                <div className="container m-auto">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center gap-5">
                            <div>
                                <Link href='/'>
                                    <Image src={contentCreator} width={130} alt="Content Creator" />
                                </Link>
                            </div>
                            <div><NavLinks /></div>
                        </div>
                        <div>
                            <div className="bg-[rgba(255,255,255,.2)] backdrop-blur-[5px] flex items-center py-2 px-2.5 rounded">
                                <input className="outline-none text-white min-w-3xs appearance-auto" type="search" name="" id="" placeholder="seach destination..." />
                                <button><Search className="text-white w-[18px]" /></button>
                            </div>
                        </div>
                        <div className="flex gap-2.5">
                            <Button style={{ textTransform: 'capitalize', color: 'white', padding: '4px 20px' }}>Log In</Button>
                            <Button variant="outlined" style={{ textTransform: 'capitalize', border: '1px solid #ffffff', color: 'white', padding: '4px 20px' }}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
