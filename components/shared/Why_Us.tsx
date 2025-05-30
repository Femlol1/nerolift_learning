//@component/shared/Why_Us.tsx
import Button from "./Button";
import OverlappingCircles from "./OverlappingCircles";

const Why_Us = () => {
	const circleData = [
		{
			src: "/assets/one.jpg",
			top: "50%",
			left: "0",
			size: 230,
			zIndex: 20,
		},
		{
			src: "/assets/two.jpg",
			top: "10%",
			left: "20%",
			size: 400,
			zIndex: 10,
		},
	];
	return (
		<>		<section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
				{/* <!-- Left: Text Content --> */}
				<div className="space-y-4 sm:space-y-6">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
						Why NeuroLift Learning?
					</h2>
					<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
						At{" "}
						<span className="font-semibold text-gray-900">
							NeuroLift Learning
						</span>
						, we believe that
						<a href="#" className="text-blue-600 hover:underline">
							true education is built on comprehension, not memorisation
						</a>
						.
					</p>
					<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
						Our platform combines
						<a href="#" className="text-blue-600 hover:underline">
							cutting‑edge neuroscience
						</a>
						with
						<a href="#" className="text-blue-600 hover:underline">
							tailored cognitive training
						</a>
						to help learners train their brains for
						<a href="#" className="text-blue-600 hover:underline">
							smarter, faster, and more effective learning
						</a>
						— not just for exams, but for
						<a href="#" className="text-blue-600 hover:underline">
							lifelong intellectual growth and success
						</a>
						.
					</p>
					<div className="container max-w-7xl mx-auto">
						<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
							We provide
							<a href="#" className="text-blue-600 hover:underline">
								Maths
							</a>
							,
							<a href="#" className="text-blue-600 hover:underline">
								English
							</a>{" "}
							and
							<a href="#" className="text-blue-600 hover:underline">
								Science Tutoring
							</a>
							services using these personalised neuroscientific techniques –
							Cater for
							<a href="#" className="text-blue-600 hover:underline">
								SATS
							</a>
							,
							<a href="#" className="text-blue-600 hover:underline">
								GCSE
							</a>
							,
							<a href="#" className="text-blue-600 hover:underline">
								A‑levels
							</a>
							,
							<a href="#" className="text-blue-600 hover:underline">
								UCAS admission
							</a>{" "}
							and
							<a href="#" className="text-blue-600 hover:underline">
								University‑level Tutoring
							</a>
							(such as dissertation help).
						</p>
						<div className="mt-6 sm:mt-10 flex justify-start">
							<Button className="border-black text-black justify-start text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
								Explore Our Programs
							</Button>
						</div>
					</div>
				</div>

				{/* <!-- Right: Overlapping Circular Images --> */}
				<div className="relative w-full h-60 sm:h-80 lg:h-auto">
					<div className="relative aspect-square scale-50 sm:scale-75 lg:scale-75 ">
						<OverlappingCircles images={circleData} rotate="rotate-45" />
					</div>
				</div>
			</div>
			</section>
		</>
	);
};

export default Why_Us;
