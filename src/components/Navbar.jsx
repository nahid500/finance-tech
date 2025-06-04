import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 px-6 rounded-b fixed top-0 left-0 right-0 z-10 shadow-md">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div>
                    <a href = "#" className="text-2xl font-bold">
                        <span className="text-white">Jakaria </span>
                        <span className="text-red-600">Inc</span>
                    </a>
                </div>

                <nav>
                    <ul className="flex gap-6 items-center text-white font-medium">
                        {/* <li>Home</li> */}
                        <li>
                            <a href = "#about">About</a></li>
                        <li>
                            <a href = "#services">Services</a></li>
                        <li>
                            <Link href = "/learning">Learning </Link>
                        </li>
                        <li>
                            <Link href = "/blogs">Blogs </Link>
                        </li>
                        <li>
                            <a href = "#pricing">Pricing</a>
                        </li>
                    </ul>
                </nav>

                <button className="bg-gradient-to-r from-purple-800 to-blue-800 text-white font-bold px-4 py-2 rounded-full hover:bg-cyan-300">
                    Contact
                </button>
            </div>
        </div>
    );
}
