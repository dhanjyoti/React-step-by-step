import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <LanguageSwitcher page="home" />
      <nav>
        <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
