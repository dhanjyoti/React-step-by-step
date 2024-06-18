"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({children}){
    const pathName = usePathname();
    console.log(pathName)
    return (
        <div>
            {
                pathName !== "/about/aboutcollege" ? <ul className="flex flex-row gap-5">
                <li className="bg-green-600 p-4 text-white">
                    <Link href="/about">About main</Link>
                </li>
                <li className="bg-green-600 p-4 text-white">
                    <Link href="/about/aboutcollege">About College</Link>
                </li>
                <li className="bg-green-600 p-4 text-white">
                    <Link href="/about/aboutstudent">About Student</Link>
                </li>
            </ul>
            : <Link href="/about">Go to About page</Link>
            }
            {children}
        </div>
    )
}