//@component/shared/Home_Landing.tsx
"use client";
import { useState } from "react";
import Button from "./Button";
import ConsultationModal from "./ConsultationModal";
import Header from "./Header";
import OverlappingCircles from "./OverlappingCircles";

export default function Home_Landing() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
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
		<section className="min-h-screen">
			<div
				style={{
					position: "fixed", // or "absolute" if you prefer relative to <section>
					top: 0,
					left: 0,
					width: "100vw",
					height: "150vh",
					backgroundImage: "url('/assets/nll-bg-vector-2.svg')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",

					zIndex: -10,
				}}
			/>
			<Header />
			<main className="container mx-auto px-4 py-8 sm:py-12 md:py-20">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[calc(100vh-200px)]">
					<div className="relative w-full max-w-sm sm:max-w-md order-2 md:order-1">
						<div className="relative aspect-square scale-75 sm:scale-90 md:scale-100">
							<OverlappingCircles images={circleData} rotate="rotate-45" />
						</div>
					</div>

					<div className="text-center md:text-right order-1 md:order-2 space-y-4 sm:space-y-6">
						<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
							Your Brain,
							<br />
							Your{" "}
							<span className="text-blue-500">Superpower.</span>
						</h1>
						<p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg mx-auto md:mx-0">
							We celebrate neurodiversity and empower
							<br className="hidden sm:block" />
							every learning need.
						</p>

						<div className="pt-4 sm:pt-6 md:pt-10 flex justify-center md:justify-end">
							<Button
								onClick={openModal}
								className="border-black text-[#00C869] px-6 py-3 text-sm sm:text-base"
							>
								Book A Free Consult
							</Button>
						</div>
					</div>
				</div>
			</main>
			{/* Consultation Modal */}
			<ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
		</section>
	);
}
