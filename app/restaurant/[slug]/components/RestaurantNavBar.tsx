import Link from "next/link";

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/blablabla" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/blablabla/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
