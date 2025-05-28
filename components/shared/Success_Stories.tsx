//@components/shared/Success_Stories.tsx
"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

interface Story {
	name: string;
	videoUrl: string;
}

const stories: Story[] = [
	{ name: "FirstName LastName", videoUrl: "/videos/1.mp4" },
	{ name: "Alice Smith", videoUrl: "/videos/2.mp4" },
	{ name: "Bob Johnson", videoUrl: "/videos/3.mp4" },
	{ name: "Cara Lee", videoUrl: "/videos/4.mp4" },
	{ name: "Dan Patel", videoUrl: "/videos/5.mp4" },
];

const SuccessStoryCarousel: React.FC = () => {
	const [current, setCurrent] = useState(0);
	const total = stories.length;

	const handleNext = () => {
		setCurrent((cur) => (cur + 1) % total);
	};

	const handleDotClick = (index: number) => {
		setCurrent(index);
	};

	return (
		<section className="py-16 px-4 bg-white">
			{/* Title */}
			<h2 className="text-center text-2xl font-semibold">
				Success Story:{" "}
				<a href="#" className="text-blue-600 hover:underline">
					{stories[current].name}
				</a>
			</h2>

			{/* Carousel Frame */}
			<div className="relative mt-8 flex justify-center">
				{/* Front card */}
				<div className="relative w-full max-w-2xl pb-[56.25%] bg-white border border-gray-300 rounded-lg overflow-hidden">
					{/* Video placeholder */}
					<div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
						<FaPlay className="text-green-400 w-12 h-12" />
					</div>
				</div>

				{/* Next Arrow */}
				<button
					onClick={handleNext}
					className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl text-gray-700 hover:text-gray-900 transition"
					aria-label="Next Story"
				>
					&rsaquo;
				</button>
			</div>

			{/* Pagination Dots */}
			<div className="mt-6 flex justify-center space-x-3">
				{stories.map((_, idx) => (
					<button
						key={idx}
						onClick={() => handleDotClick(idx)}
						className={`
              w-3 h-3 rounded-full transition
              ${idx === current ? "bg-gray-800" : "bg-gray-300"}
            `}
						aria-label={`Go to story ${idx + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default SuccessStoryCarousel;
