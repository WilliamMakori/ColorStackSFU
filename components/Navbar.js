import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">
          ColorStack SFU
        </Link>
        <div className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}