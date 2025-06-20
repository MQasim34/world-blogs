'use client'

import Link from "next/link"
import { House, FileText, Bookmark, Camera, MessageSquare, User } from "@deemlol/next-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { FaRegFolderOpen } from "react-icons/fa";

const NavLinks = () => {
    const links = [
        { name: 'Dashboard', href: '/wp-admin/dashboard', icon: House },
        { name: 'Posts', href: '/wp-admin/posts', icon: Bookmark },
        { name: 'Media Files', href: '/wp-admin/mediafiles', icon: Camera },
        { name: 'Pages', href: '/wp-admin/pages', icon: FileText },
        { name: 'Templates', href: '/wp-admin/templates', icon: FaRegFolderOpen },
        { name: 'Comments', href: '/wp-admin/comments', icon: MessageSquare },
        { name: 'Users', href: '/wp-admin/users', icon: User },
    ];

    const pathname = usePathname(); 

    return (
        <ul className="flex flex-col gap-0.5">
            {links.map(link => {
                const Icon = link.icon;
                return (
                    <li key={link.name} className="flex flex-col">
                        <Link
                            href={link.href}
                            className={clsx(
                                'flex justify-start items-center text-[14px] font-medium py-2 px-1.5 dark:hover:bg-violet-100 hover:bg-blue-100 dark:hover:text-violet-900 hover:text-blue-900 border-l-3 dark:hover:border-violet-800 hover:border-blue-900 rounded gap-2',
                                { 
                                    'dark:bg-violet-100 bg-blue-100 dark:text-violet-900 text-blue-900 dark:border-violet-900 border-blue-900': pathname === link.href,
                                    'dark:border-black border-white': pathname !== link.href,
                                }
                            )}
                        >
                            <Icon className="w-[18px]" />
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;