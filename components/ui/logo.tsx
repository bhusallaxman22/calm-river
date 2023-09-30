import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <image className="w-8 h-8" href="/images/logo.png" />
    </Link>
  );
}
