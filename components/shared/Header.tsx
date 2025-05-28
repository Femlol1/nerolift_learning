import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="container mx-auto px-4 py-6 flex justify-between items-center bg-transparent">
			<div className="flex flex-row">
				<Image
					src="/assets/logo.png"
					alt="Logo"
					className=" w-12 h-12 md:w-16 md:h-16 rounded-full"
					loading="eager"
					quality={100}
					placeholder="blur"
					blurDataURL="/assets/logo.png"
					width={64}
					height={64}
					priority
				/>
				<Image
					src="/assets/name.png"
					alt="name"
					className="ml-2 w-10 h-10 md:w-16 md:h-16"
					loading="eager"
					quality={100}
					placeholder="blur"
					blurDataURL="/assets/logo.png"
					width={64}
					height={64}
					priority
				/>
			</div>
			<nav className="hidden md:block">
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
			{/* Mobile Menu Button */}
			<div className="md:hidden">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-gray-800 focus:outline-none"
				>
					{isMenuOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					)}
				</button>
			</div>
			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
					<ul className="flex flex-col space-y-4 p-4 text-gray-800">
						<li>
							<Link
								href="/"
								className="font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								href="/programs"
								className="font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Our Programs
							</Link>
						</li>
						<li>
							<Link
								href="/success-stories"
								className="font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Success Stories
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="font-medium"
								onClick={() => setIsMenuOpen(false)}
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
