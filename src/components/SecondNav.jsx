export default function SecondNav() {
    return (
        <div className="bg-white p-2 md:px-6 fixed top-14 left-0 right-0 z-10 shadow-md w-full">
            <div className="flex justify-evenly items-center max-w-screen-xl mx-auto text">
                <div>
                    <h1 className="font-bold">
                        <span className="text-purple-600">Jakaria </span>
                        <span className="text-red-600">Inc</span>
                    </h1>
                </div>

                <nav>
                    <ul className="flex gap-6 items-center text-purple-600 font-medium">
                        <li>ICO</li>
                        <li>DEX</li>
                        <li>Community Build</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
