import Link from "next/link";

const Header = () => {
	return (
		<header className="container mx-auto px-16 py-6 flex justify-between items-center">
			<div className="w-16 h-16 bg-black rounded-full"></div>
			<nav>
				<ul className="flex space-x-6 text-gray-800">
					<li>
						<Link href="/" className="font-medium">
							Home
						</Link>
					</li>
					<li>
						<Link href="/about" className="font-medium">
							About Us
						</Link>
					</li>
					<li>
						<Link href="/programs" className="font-medium">
							Our Programs
						</Link>
					</li>
					<li>
						<Link href="/success-stories" className="font-medium">
							Success Stories
						</Link>
					</li>
					<li>
						<Link href="/contact" className="font-medium">
							Contact Us
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
