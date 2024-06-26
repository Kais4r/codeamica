import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white border-b-2 border-b-black">
      <div className="text-OuterSpace-10">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/pages/dashboard">
          <p>Dashboard</p>
        </Link>
        <Link href="/pages/dashboard/settings">
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}
