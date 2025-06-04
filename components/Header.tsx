import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto border-l">
        <div className="flex">
          <div className="my-auto px-4">
            <Link href="/">Logo</Link>
          </div>
          <nav className="hidden md:flex">
            <Link
              href="/products"
              className="border-l text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="border-x text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="border-r text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
