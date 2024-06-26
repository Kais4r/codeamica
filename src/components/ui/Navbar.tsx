import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black">
      <h1 className="text-white">Navbar</h1>

      <div className="text-white">
        <Link href="/">Home</Link>
        <br />
        <Link href="/pages/dashboard">Dashboard</Link>
        <br />
        <Link href="/pages/dashboard/settings">Settings</Link>
      </div>
    </div>
  );
}
