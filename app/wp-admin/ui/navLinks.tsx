'use client'

import Link from "next/link"
// import { poppins } from "../fonts/fonts";
import { House, FileText, Bookmark, Camera, MessageSquare, User } from "@deemlol/next-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FaRegFolderOpen } from "react-icons/fa";

// interface link{
//     name: string;
//     href: string;
//      icon: React.ComponentType<{ className?: string }>;
// }



import React from 'react'

const navLinks = () => {
    const links = [
        { name: 'Dahsboard', href: '/wp-admin/dashboard', icon: House },
        { name: 'Posts', href: '/wp-admin/posts', icon: Bookmark },
        { name: 'Media Files', href: '/wp-admin/mediafiles', icon: Camera },
        { name: 'Pages', href: '/wp-admin/pages', icon: FileText },
        { name: 'Templates', href: '/wp-admin/templates', icon: FaRegFolderOpen },
        { name: 'Comments', href: '/wp-admin/comments', icon: MessageSquare },
        { name: 'Users', href: '/wp-admin/users', icon: User },
    ]

    const pathname = usePathname();
    return (
        <ul className="flex flex-col gap-0.5">
            {links.map(link => {
                const Icon = link.icon;
                return (
                    <li key={link.name} className="flex flex-col">
                        <Link
                            href={link.href}
                            className={clsx('flex justify-start items-center text-[14px] font-medium py-2 px-1.5 hover:bg-blue-100 hover:text-blue-900 border-l-3 hover:border-blue-900 rounded gap-2',
                                { 'bg-blue-100 text-blue-900 border-blue-900': pathname === link.href, },
                                { 'border-white': pathname !== link.href, }
                            )}>
                            <Icon className="w-[18px]" />
                            {link.name}
                        </Link>
                    </li>)
            })}
        </ul>
    )
}

export default navLinks
