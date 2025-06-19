import Image from "next/image";
import { lato } from "../fonts/fonts";

import React from 'react'
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { ArrowUpFromDotIcon } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardTopBar = () => {
  return (
    <div className="dark:bg-black bg-white py-2 px-5 shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2.5">
        <SidebarTrigger />

        <div className="flex  gap-1.5 items-center">
          <span className={`${lato} font-medium text-gray-500`}>Preview:</span>
          <span></span>
          <Link href='/' target="_blank" className={`flex gap-1 items-center ${lato} font-medium text-sm underline`}>
            World Blogs<ArrowUpFromDotIcon className="w-[14px] rotate-45 mt-1.5" />
          </Link>
        </div>
        </div>
        <div className="flex items-center-safe gap-2.5">
          <div className="flex items-center gap-2.5">
            <Image src='/qasim.png' width={40} height={40} alt="hello qasim" className="rounded-full border-2 dark:border-violet-900 border-blue-900 p-0.5" />
            <span className={`${lato} antialiased font-medium text-sm`}>Welcome Back Qasim</span>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default DashboardTopBar
