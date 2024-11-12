import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <LanguageSwitcher page="contact" />
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link>
      </nav>
    </div>
  );
}
