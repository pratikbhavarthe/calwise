import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="bg-pink-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">CalWise</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/history" className="hover:underline">History</Link></li>
            <li><Link href="/camera" className="hover:underline">Add Food</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
