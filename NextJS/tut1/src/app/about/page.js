"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const About =()=>{
    const router = useRouter();
    return (
        <div>
            <h2 className="text-center mt-20 text-yellow-500 text-4xl font-bold">this is about page</h2>
            <button onClick={()=>router.push("/")}>Home button</button>
            <br />
            <Link href="/about/aboutcollege">Go to About college</Link>
            <br />
            <Link href="/about/aboutstudent">Go to Student details</Link>
        </div>
    )
}
export default About;