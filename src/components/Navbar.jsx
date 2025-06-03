export default function Navbar() {
    return (
        <div className="bg-cyan-600 p-2 px-6 rounded-b fixed top-10 left-0 right-0 z-10 shadow-md">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto">
                <div>
                    <h1 className="text-2xl font-bold">
                        <span>Jakaria </span>
                        <span className="text-red-600">Inc</span>
                    </h1>
                </div>

                <nav>
                    <ul className="flex gap-6 items-center text-white font-medium">
                        <li>Home</li>
                        <li>
                            <a href = "#about">About</a></li>
                        <li>
                            <a href = "#services">Services</a></li>
                        <li>
                            <a href = "#learning">Learning</a></li>
                        
                        <li>
                            <a href = "#blogs">Blogs</a>
                        </li>
                        <li>
                            <a href = "#pricing">Pricing</a>
                        </li>
                    </ul>
                </nav>

                <button className="bg-white font-bold px-4 py-2 rounded-full hover:bg-cyan-300">
                    Contact
                </button>
            </div>
        </div>
    );
}
