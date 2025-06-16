import Image from "next/image";
import qasim from '@/public/dashboard/qasim.png'
import { lato } from "../fonts/fonts";

import React from 'react'

const DashboardTopBar = () => {
  return (
    <div className="bg-white py-2 px-5 shadow">
            <div className="flex justify-between items-center">
                <div>WebSite URL</div>
                <div className="flex items-center gap-2.5">
                    <Image src={qasim} width={40} height={40} alt="hello qasim" className="rounded-full border-2  border-blue-900 p-0.5" />
                    <span className={`${lato} antialiased font-medium text-sm`}>welcome back, Qasim</span>
                </div>
            </div>
        </div>
  )
}

export default DashboardTopBar
