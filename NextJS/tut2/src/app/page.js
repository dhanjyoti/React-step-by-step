import Link from "next/link";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Wallpaper from "../../public/feather.jpg";

const montserrat = Montserrat({
  weight: '600',
  subsets:['latin'],
  display: 'swap'
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={Wallpaper} width={400} height={300} alt="feather" />
      <h1>Fetch Data with API in Client Component</h1>
      <h2 className={montserrat.className}>This is the Font Family Part</h2>
      <div className="flex flex-col">
        <Link href="/productlist">Go to Product List</Link>
        <Link href="/sproductlist">Go to Server Products</Link>
        <Link href="/color">Go module color</Link>
      </div>
    </main>
  );
}
