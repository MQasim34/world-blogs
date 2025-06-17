import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

import React from 'react'

const NavSideBar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="dark:bg-secondary/40 bg-white border text-secondary-foreground shadow-xs hover:bg-secondary/80 h-9 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive px-2.5"><MenuIcon className="size-4" /></div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Content Creator</SheetTitle>
                    <SheetDescription>
                        Menu will display here
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default NavSideBar
