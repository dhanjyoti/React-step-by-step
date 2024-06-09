import Link from "next/link";

export default function Layout({children}){
    return (
        <div>
            <ul className="flex flex-row gap-5">
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
            {children}
        </div>
    )
}