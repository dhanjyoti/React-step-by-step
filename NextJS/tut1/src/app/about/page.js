"use client"
import { useRouter } from "next/navigation";

const About =()=>{
    const router = useRouter();
    return (
        <div>
            <h2>this is about page</h2>
            <button onClick={()=>router.push("/")}>Home button</button>
        </div>
    )
}
export default About;