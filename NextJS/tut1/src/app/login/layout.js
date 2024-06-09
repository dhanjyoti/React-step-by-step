import Link from "next/link";

export default function Layout({children}){
    return (
        <div>
            <ul className="flex flex-row gap-5">
                <li className="bg-green-600 p-4 text-white">
                    <Link href="/login">Login main</Link>
                </li>
                <li className="bg-green-600 p-4 text-white">
                    <Link href="/login/loginstudent">Student Login</Link>
                </li>
                <li className="bg-green-600 p-4 text-white">
                    <Link href="/login/loginteacher">Teacher Login</Link>
                </li>
            </ul>
            {children}
        </div>
    )
}