import Link from "next/link";

export default function Page(){
    return (
        <div className="flex flex-col">
            <h2>Welcome home!</h2>
            <Link href="/blog">Blog</Link>
            <Link href="/products">Products</Link>
        </div>
    )
}