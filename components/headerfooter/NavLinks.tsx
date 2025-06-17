import { lato, } from "@/app/wp-admin/fonts/fonts"
import Link from "next/link"


const Links: {name: string, href: string}[] = [
    {name: 'Hotel',  href: '/'},
    {name: 'Flight',  href: '/'},
    {name: 'Train',  href: '/'},
    {name: 'travel',  href: '/'},
    {name: 'car Rental',  href: '/'},
    {name: 'Our Blogs',  href: '/blogs'},
]



const NavLinks = () => {
  return (
    <ul className="flex gap-5">
        {Links.map(link => <li key={link.name}><Link className={`${lato} antialiased font-normal text-[16px] text-white capitalize`} href={link.href}>{link.name}</Link></li>)}
    </ul>
  )
}

export default NavLinks
