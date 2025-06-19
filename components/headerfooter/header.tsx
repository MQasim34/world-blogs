'use client'

import Image from "next/image";
import Link from "next/link";
import contentCreator from '@/public/FrontendImg/contentCreator_fullwhite.svg'
import contentCreatordark from '@/public/contentCreator.svg'
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import NavSideBar from "@/components/headerfooter/NavSideBar";
import { useTheme } from "next-themes";

const header = () => {
     const { theme, systemTheme } = useTheme();
    const logoImage = (theme === "system" ? systemTheme : theme) === "dark" 
    ? contentCreator
    : contentCreatordark; 
    return (
        <div>
            <div className="sticky p-2.5 bg-accent backdrop-blur-[5px] z-10">
                <div className="container m-auto">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex items-center gap-5">
                            <div>
                                <Link href='/'>
                                    <Image 
                                    src={logoImage}
                                    width={130} 
                                    alt="Content Creator" 
                                    />
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
