// components/Header.tsx
import { Fugaz_One } from "next/font/google";
import Link from "next/link";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 sm:p-8 flex items-center justify-between gap-4">
      <div className="container mx-auto">
        <h1 className={"text-2xl" + fugaz.className}>Resume Builder</h1>
        <div>
          <Link className="p-4" href={"/"}>Home</Link>
          <Link className="p-4" href={"/craft-page"}>Craft</Link>
          <Link className="p-4" href={"/"}>Login</Link>
          <Link className="p-4" href={"/"}>SignUp</Link>
        </div>
      </div>
    </header>
  );
}
