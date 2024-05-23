import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 w-[250px] px-10 pt-16">
        <Link href={"/weather"} className="bg-blue-600 w-fit px-4 py-1 rounded-md">Weather</Link>
        <Link href={"/simple-interest"} className="bg-blue-600 w-fit px-4 py-1 rounded-md">Simple Interest</Link>
        <Link href={"/show-input"} className="bg-blue-600 w-fit px-4 py-1 rounded-md">Show Input</Link>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
