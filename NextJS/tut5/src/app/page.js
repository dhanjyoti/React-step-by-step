import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 items-center justify-between p-24">
      <Link href="./products" className="border-2 border-gray-700">Products</Link>
      <Link href="./addproduct" className="border-2 border-gray-700">Add Products</Link>
    </main>
  );
}
