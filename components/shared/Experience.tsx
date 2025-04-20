const Experience = () => {
	return (
		<section
			id="reviews"
			className="bg-blue-600 text-white py-16 px-4 grid gap-8 border-y-4 border-black"
		>
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-x-60">
				{/* <!-- Stat 1 --> */}
				<div className="text-center justify-start">
					<div className="text-6xl md:text-7xl font-extrabold leading-none">
						10
					</div>
					<div className="mt-2 text-lg md:text-xl uppercase">
						Years of
						<br />
						Tutoring Experience
					</div>
				</div>
				{/* <!-- Stat 2 --> */}
				<div className="text-center justify-end">
					<div className="text-6xl md:text-7xl font-extrabold leading-none">
						000+
					</div>
					<div className="mt-2 text-lg md:text-xl uppercase">
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
