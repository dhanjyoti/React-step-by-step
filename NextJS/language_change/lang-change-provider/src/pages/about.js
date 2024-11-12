import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <LanguageSwitcher page="about" />
      <nav>
        <Link href="/">Home</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
