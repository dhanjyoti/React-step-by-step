import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Fetch Data with API in Client Component</h1>
      <Link href="/productlist">Go to Product List</Link>
	<Link href="/sproductlist">Go to Server Products</Link>
    </main>
  );
}
