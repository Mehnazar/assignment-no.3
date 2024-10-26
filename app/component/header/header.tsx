import Link from "next/link";

function Header() {
  return (
    <header className="flex-justify-between bg-gray-800 text-white py-8 ">

          {/* Logo */}
          <div>
        <h1 className="text-9xl text-center italic bg-slate-400 text-cyan-700">Educational Pedia</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-x-6">
          <li>
            <Link href="/Home" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </li>
          <li>
            <Link href="/FAQ" className="hover:text-blue-400">FAQ</Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
