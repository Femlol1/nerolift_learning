"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Home_Landing() {
	return (
		<div className="min-h-screen">
			<header className="container mx-auto px-4 py-6 flex justify-between items-center">
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

			<main className="container mx-auto px-4 py-20">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="relative w-full max-w-md">
						<div className="absolute inset-0 rounded-full border-4 border-blue-500 transform scale-110"></div>
						<div className="absolute inset-0 rounded-full border-4 border-green-400 transform scale-105"></div>
						<div className="relative rounded-full overflow-hidden aspect-square">
							<Image
								src="/placeholder.svg?height=500&width=500"
								alt="Students reading together"
								width={500}
								height={500}
								className="object-cover w-full h-full grayscale"
							/>
						</div>
					</div>

					<div className="text-right">
						<h1 className="text-xl md:text-2xl lg:text-7xl font-bold text-gray-800">
							Your Brain,
							<br />
							Your <span className="text-blue-500">Superpower.</span>
						</h1>
						<p className="mt-6 text-xl md:text-2xl text-gray-700">
							We celebrate neurodiversity and empower
							<br />
							every learning need.
						</p>

						<div className="mt-10 flex justify-end">
							<Button
								onClick={() => alert("Consult booked!")}
								className=" border-black"
							>
								Book A Free Consult
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
