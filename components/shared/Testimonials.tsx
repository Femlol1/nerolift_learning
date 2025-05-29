// @components/shared/Testimonials.tsx
"use client";
import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
	name: string;
	initials: string;
	review: string;
}

const testimonials: Testimonial[] = [
	{
		name: "AK",
		initials: "AK",
		review: "Best teacher I've ever had hands down. She really understood me, never made me feel incapable, and always took the time to explain things clearly. What stood out most was how much she genuinely cared, which made a huge difference. I went from failing in some subjects during my second mocks to passing with confidence in my real exams. For the first time, tuition actually made a visible impact. Her support turned my education around."
	},
	{
		name: "HB",
		initials: "HB",
		review: "Ayeza was an incredible tutor who helped me massively with GCSE English and Combined Science. Her teaching style really clicked with me, she broke things down clearly and made the work feel manageable. I was nervous at first, especially during such a stressful period, but she created a space where I felt supported and confident asking questions. She helped me stay consistent, improved my writing and analysis in English, and made tough science topics actually make sense. Thanks to her, I hit my goal grades and feel more prepared going into A-levels."
	},
	{
		name: "AZ",
		initials: "AZ",
		review: "Ayeza's teaching style really suited the way I learn! she broke things down so clearly and made everything feel more approachable. I was anxious about starting tuition, especially without a proper routine, but she created such a supportive environment that I quickly felt comfortable asking questions and making mistakes. She kept me consistent with revision, helped me boost my writing and analysis in English, and made science topics finally click. Her patience and dedication gave me the confidence to reach my goal grades and now I feel ready to take on A-levels."
	}
];

const Testimonials: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	const goToTestimonial = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
			<div className="max-w-4xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-8 md:mb-12">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
						What Our Students Say
					</h2>
					<p className="text-sm sm:text-base text-gray-600">
						Real experiences from students who have transformed their learning journey
					</p>
				</div>

				{/* Testimonial Card */}
				<div className="relative bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
					{/* Quote Icon */}
					<div className="absolute top-4 left-4 sm:top-6 sm:left-6">
						<FaQuoteLeft className="text-blue-200 w-6 h-6 sm:w-8 sm:h-8" />
					</div>

					{/* Testimonial Content */}
					<div className="pt-8 sm:pt-10">
						<blockquote className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
							&ldquo;{testimonials[currentIndex].review}&rdquo;
						</blockquote>
						
						{/* Student Name */}
						<div className="flex items-center justify-center">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center">
									<span className="text-white font-semibold text-sm sm:text-base">
										{testimonials[currentIndex].initials}
									</span>
								</div>
								<div>
									<p className="font-semibold text-gray-900 text-sm sm:text-base">
										{testimonials[currentIndex].name}
									</p>
									<p className="text-xs sm:text-sm text-gray-500">Student</p>
								</div>
							</div>
						</div>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={prevTestimonial}
						className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200"
						aria-label="Previous testimonial"
					>
						<FaChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
					</button>
					
					<button
						onClick={nextTestimonial}
						className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200"
						aria-label="Next testimonial"
					>
						<FaChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
					</button>
				</div>

				{/* Pagination Dots */}
				<div className="flex justify-center mt-6 sm:mt-8 space-x-2">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => goToTestimonial(index)}
							className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
								index === currentIndex 
									? "bg-blue-600 scale-110" 
									: "bg-gray-300 hover:bg-gray-400"
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
