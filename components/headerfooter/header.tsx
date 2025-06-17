import Image from "next/image";
import Link from "next/link";
import contentCreator from '@/public/FrontendImg/contentCreator_fullwhite.svg'
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import NavSideBar from "@/components/headerfooter/NavSideBar";

const header = () => {
    return (
        <div>
            <div className="sticky p-2.5 dark:bg-[rgba(0,0,0,.3)] bg-[rgba(255,255,255,.3)] backdrop-blur-[5px] z-10">
                <div className="container m-auto">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center gap-5">
                            <div>
                                <Link href='/'>
                                    <Image src={contentCreator} width={130} alt="Content Creator" />
                                </Link>
                            </div>
                            <div className="hidden md:flex"><NavLinks /></div>
                        </div>
                        <div className="hidden lg:flex items-center gap-2.5">
                            <Button variant='default'>Log In</Button>
                            <Button variant='outline'>Sign Up</Button>
                            <ModeToggle />
                        </div>
                        <div className="flex gap-2.5 lg:hidden">
                            <NavSideBar />
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
