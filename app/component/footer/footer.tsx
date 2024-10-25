import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        
        {/* Left: Quick Links Heading */}
        <div>
          <h1 className="text-xl font-bold mb-4 lg:mb-0">Quick Links</h1>
        </div>

        {/* Right: Links */}
        <nav>
          <ul className="flex gap-x-6">
            <li>
              <Link href="/Privacy" className="hover:text-blue-400">Privacy</Link>
            </li>
            <li>
              <Link href="/Feedback" className="hover:text-blue-400">Feedback</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </footer>
  );
}
