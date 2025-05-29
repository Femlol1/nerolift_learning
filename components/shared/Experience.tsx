//@component/shared/Experience.tsx

const Experience = () => {
	return (
		<section
			id="reviews"
			className="bg-blue-600 text-white py-8 sm:py-12 md:py-16 px-4 border-y-4 border-black"
		>
			<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-around items-center gap-8 sm:gap-12 md:gap-60">
				{/* <!-- Stat 1 --> */}
				<div className="text-center">
					<div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
						10
					</div>
					<div className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl uppercase">
						Years of
						<br />
						Tutoring Experience
					</div>
				</div>
				{/* <!-- Stat 2 --> */}
				<div className="text-center">
					<div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
						000+
					</div>
					<div className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl uppercase">
						Lorem Ipsum
						<br />
						Students
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
