"use client";
import Button from "./Button";
import Header from "./Header";
import OverlappingCircles from "./OverlappingCircles";

export default function Home_Landing() {
	const circleData = [
		{
			src: "/assets/one.jpg",
			top: "0%",
			left: "0",
			size: 230,
			zIndex: 10,
		},
		{
			src: "/assets/two.jpg",
			top: "60%",
			left: "5%",
			size: 200,
			zIndex: 20,
		},
		{
			src: "/assets/three.jpg",
			top: "25%",
			left: "20%",
			size: 300,
			zIndex: 15,
		},
		{
			src: "/assets/four.jpg",
			top: "15%",
			left: "60%",
			size: 200,
			zIndex: 5,
		},
	];

	return (
		<section className="bg-contain">
			<Header />
			<main className="container mx-auto px-4 py-20">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="relative w-full max-w-md">
						<div className="relative aspect-square scale-100 md:scale-100 sm:scale-50 lg:scale-100">
							<OverlappingCircles images={circleData} />
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
		</section>
	);
}
