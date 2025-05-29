//@components/CardDiagram.tsx
import React from "react";

const CardDiagram: React.FC = () => {
	const subjects = [
		"Maths",
		"English",
		"Science",
		"Psychology",
		"Economics",
		"Business",
	];
	const focusAreas = [
		"GCSEs",
		"A‑Levels",
		"UCAS Admissions Support",
		"Undergraduate Support",
	];
	const programs = [
		"Cognitive Strength Training",
		"Neurodiverse Learning Strategies",
		"Workshops & Training",
		"AI‑Powered Brain Assessments",
	];

	return (
		<section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
			{/* Mobile Layout */}
			<div className="block md:hidden max-w-4xl mx-auto space-y-6">
				<h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
					What We Offer
				</h2>
				
				{/* Subjects Card */}
				<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
					<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">Subjects</h3>
					<ul className="grid grid-cols-2 gap-2">
						{subjects.map((sub) => (
							<li key={sub} className="flex items-center text-gray-700 text-sm sm:text-base">
								<span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mr-2 rounded-full border border-green-500 text-green-500 text-xs">
									✓
								</span>
								{sub}
							</li>
						))}
					</ul>
				</div>

				{/* Key Focus Areas Card */}
				<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
					<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
						Key Focus Areas
					</h3>
					<ul className="space-y-2">
						{focusAreas.map((area) => (
							<li key={area} className="flex items-center text-gray-700 text-sm sm:text-base">
								<span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mr-2 rounded-full border border-green-500 text-green-500 text-xs">
									✓
								</span>
								{area}
							</li>
						))}
					</ul>
				</div>

				{/* Our Programs Card */}
				<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
					<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
						Our Programs
					</h3>
					<ul className="space-y-2">
						{programs.map((prog) => (
							<li key={prog} className="flex items-center text-gray-700 text-sm sm:text-base">
								<span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 mr-2 rounded-full border border-green-500 text-green-500 text-xs">
									✓
								</span>
								{prog}
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden md:block relative max-w-4xl mx-auto h-[400px]">
				{/* ────────── LEFT CARD: Subjects ────────── */}
				<div
					className="absolute top-0 left-0 bg-white p-6 rounded-lg"
					style={{ boxShadow: "8px 8px 0 rgba(0,0,0)" }}
				>
					<h3 className="text-2xl font-bold text-blue-600 mb-4">Subjects</h3>
					<ul className="space-y-2">
						{subjects.map((sub) => (
							<li key={sub} className="flex items-center text-gray-700">
								<span className="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full border border-green-500 text-green-500">
									✓
								</span>
								{sub}
							</li>
						))}
					</ul>
				</div>

				{/* ────────── TOP‑RIGHT CARD: Key Focus Areas ────────── */}
				<div
					className="absolute top-0 right-2/4 bg-white p-6 rounded-lg"
					style={{ boxShadow: "8px 8px 0 rgba(0,0,0)" }}
				>
					<h3 className="text-2xl font-bold text-blue-600 mb-4">
						Key Focus Areas
					</h3>
					<ul className="space-y-2">
						{focusAreas.map((area) => (
							<li key={area} className="flex items-center text-gray-700">
								<span className="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full border border-green-500 text-green-500">
									✓
								</span>
								{area}
							</li>
						))}
					</ul>
				</div>

				{/* ────────── BOTTOM‑RIGHT CARD: Our Programs ────────── */}
				<div
					className="absolute bottom-0 right-0 bg-white p-6 rounded-lg"
					style={{ boxShadow: "8px 8px 0 rgba(0,0,0)" }}
				>
					<h3 className="text-2xl font-bold text-blue-600 mb-4">
						Our Programs
					</h3>
					<ul className="space-y-2">
						{programs.map((prog) => (
							<li key={prog} className="flex items-center text-gray-700">
								<span className="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full border border-green-500 text-green-500">
									✓
								</span>
								{prog}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default CardDiagram;
