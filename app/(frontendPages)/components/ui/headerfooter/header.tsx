import Link from "next/link";

export default function () {
    return(
        <div className="p-2.5 bg-gray-100">
            <div className="container m-auto">
                <div className="flex flex-row justify-between items-center">
                    <div>Logo</div>
                    <div>Navigation </div>
                    <div><Link href='/login'>Login</Link></div>
                </div>
            </div>
        </div>
    )
}
