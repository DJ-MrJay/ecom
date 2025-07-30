import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white shadow-md">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/ecommerce-logo.svg"
            alt="Logo"
            width={200}
            height={50}
            unoptimized
          />
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};
