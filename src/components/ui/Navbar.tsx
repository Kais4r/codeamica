import Link from "next/link";

export default function Navbar() {
  return (
    <div className="Parent">
      <div className="bg-OuterSpace-0">
        <h1 className="text-h2 text-White">Codeamica</h1>
      </div>

      <div className="flex border-b-2 border-OuterSpace-40 bg-OuterSpace-80">
        <Link href="/">Home</Link>
        <Link href="/pages/dashboard">Dashboard</Link>
        <Link href="/pages/dashboard/settings">Settings</Link>
      </div>
    </div>
    // <div className="pl-4 bg-OuterSpace-0">
    //   <div className="text-White">
    //     <Link href="/">Home</Link>
    //     <Link href="/pages/dashboard">Dashboard</Link>
    //     <p className="bg-OuterSpace-30">
    //       <Link href="/pages/dashboard/settings">Settings</Link>
    //     </p>
    //   </div>
    // </div>
  );
}
