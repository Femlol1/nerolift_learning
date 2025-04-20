// src/components/OurApproaches.tsx
import React from "react";
import { FaDumbbell, FaMicroscope, FaUsers } from "react-icons/fa";
import OverlappingCircles from "./OverlappingCircles";

const OurApproaches: React.FC = () => {
	const circleData = [
		{
			src: "/assets/one.jpg",
			top: "30%",
			left: "30%",
			size: 230,
			zIndex: 20,
		},
		{
			src: "/assets/two.jpg",
			top: "-10%",
			left: "0%",
			size: 400,
			zIndex: 10,
		},
	];
	return (
		<section className="py-16 px-4 bg-white">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
				{/* LEFT: Headline + 3 items */}
				<div className="space-y-8">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
						Our Approaches***
					</h2>
					{/* Item 1 */}
					<div className="flex items-start space-x-4">
						<FaDumbbell className="text-blue-600 w-8 h-8 flex-shrink-0 mt-1" />
						<div>
							<h3 className="text-lg font-semibold text-gray-900">
								Train Your Brain Like a Muscle
							</h3>
							<p className="mt-1 text-gray-700 leading-relaxed">
								Your brain is your most powerful asset, and with the right
								training, it can unlock{" "}
								<a href="#" className="text-blue-600 hover:underline">
									new levels of cognitive potential
								</a>
								.
							</p>
						</div>
					</div>

					{/* Item 2 */}
					<div className="flex items-start space-x-4">
						<FaMicroscope className="text-blue-600 w-8 h-8 flex-shrink-0 mt-1" />
						<div>
							<h3 className="text-lg font-semibold text-gray-900">
								Science‑Backed Learning Strategies
							</h3>
							<p className="mt-1 text-gray-700 leading-relaxed">
								At{" "}
								<span className="font-semibold text-gray-900">
									NeuroLift Learning
								</span>
								, we use{" "}
								<a href="#" className="text-blue-600 hover:underline">
									neuroscience‑based methods
								</a>{" "}
								to support individuals with learning differences through
								personalised interventions, brain training, and expert coaching.
							</p>
						</div>
					</div>

					{/* Item 3 */}
					<div className="flex items-start space-x-4">
						<FaUsers className="text-blue-600 w-8 h-8 flex-shrink-0 mt-1" />
						<div>
							<h3 className="text-lg font-semibold text-gray-900">
								Enhance Learning, Work, and Success
							</h3>
							<p className="mt-1 text-gray-700 leading-relaxed">
								Whether you’re a student, professional, or seeking greater
								mental agility, our{" "}
								<a href="#" className="text-blue-600 hover:underline">
									tailored approach
								</a>{" "}
								will help you learn more effectively and perform at your best.
							</p>
						</div>
					</div>
				</div>

				{/* RIGHT: Overlapping circles */}
				<div className="relative w-full h-[350px] md:h-[450px]">
					<div className="relative aspect-square scale-50 md:scale-75 ">
						<OverlappingCircles images={circleData} rotate="-rotate-45" />
					</div>
				</div>
				{/* Large circle */}
			</div>
		</section>
	);
};

export default OurApproaches;
