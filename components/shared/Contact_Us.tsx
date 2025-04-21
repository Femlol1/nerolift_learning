import type React from "react";
import { FiMail, FiPhone, FiUsers } from "react-icons/fi";

const ContactUsFooter: React.FC = () => {
	return (
		<footer className="bg-blue-600 text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6">
			{/* Mobile Layout (< 640px) */}
			<div className="sm:hidden max-w-2xl mx-auto flex flex-col items-center">
				{/* Heading Section */}
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold mb-1">Contact Us</h2>
					<p className="text-base">You can reach us through these channels:</p>
				</div>

				{/* Contact Items */}
				<div className="space-y-4 w-full max-w-xs">
					{/* Call Us */}
					<div className="flex items-center space-x-3">
						<div className="w-7 h-7 flex items-center justify-center">
							<FiPhone className="w-5 h-5" />
						</div>
						<div>
							<p className="font-semibold text-base">Call Us</p>
							<p className="text-xs">+00 000 000 0000</p>
						</div>
					</div>

					{/* Email Us */}
					<div className="flex items-center space-x-3">
						<div className="w-7 h-7 flex items-center justify-center">
							<FiMail className="w-5 h-5" />
						</div>
						<div>
							<p className="font-semibold text-base">Email Us</p>
							<p className="text-xs">hello@neuroliftlearning.com</p>
						</div>
					</div>

					{/* Connect with Us */}
					<div className="flex items-center space-x-3">
						<div className="w-7 h-7 flex items-center justify-center">
							<FiUsers className="w-5 h-5" />
						</div>
						<div>
							<p className="font-semibold text-base">Connect with Us</p>
							<p className="text-xs">
								Instagram: <span className="text-white">@neuroliftlearn</span>
							</p>
							<p className="text-xs">
								LinkedIn: <span className="text-white">NeuroLift Learning</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Tablet Layout (640px - 1024px) */}
			<div className="hidden sm:flex lg:hidden max-w-5xl mx-auto flex-col items-center">
				{/* Heading Section - Centered on tablet */}
				<div className="text-center mb-8">
					<h2 className="text-4xl font-bold mb-2">Contact Us</h2>
					<p className="text-lg mb-6">
						You can reach us through these channels:
					</p>
				</div>

				{/* Contact Items - Horizontal layout on tablet */}
				<div className="grid grid-cols-3 gap-6 w-full">
					{/* Call Us */}
					<div className="flex flex-col items-center text-center">
						<div className="w-12 h-12 flex items-center justify-center mb-3">
							<FiPhone className="w-7 h-7" />
						</div>
						<div>
							<p className="font-semibold text-lg mb-1">Call Us</p>
							<p className="text-sm">+00 000 000 0000</p>
						</div>
					</div>

					{/* Email Us */}
					<div className="flex flex-col items-center text-center">
						<div className="w-12 h-12 flex items-center justify-center mb-3">
							<FiMail className="w-7 h-7" />
						</div>
						<div>
							<p className="font-semibold text-lg mb-1">Email Us</p>
							<p className="text-sm">hello@neuroliftlearning.com</p>
						</div>
					</div>

					{/* Connect with Us */}
					<div className="flex flex-col items-center text-center">
						<div className="w-12 h-12 flex items-center justify-center mb-3">
							<FiUsers className="w-7 h-7" />
						</div>
						<div>
							<p className="font-semibold text-lg mb-1">Connect with Us</p>
							<p className="text-sm">
								Instagram: <span className="text-white">@neuroliftlearn</span>
							</p>
							<p className="text-sm">
								LinkedIn: <span className="text-white">NeuroLift Learning</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Layout (> 1024px) */}
			<div className="hidden lg:flex max-w-5xl mx-auto flex-row items-center gap-0">
				{/* Left column */}
				<div className="text-left flex-1 pr-0">
					<h2 className="text-4xl font-bold mb-2">Contact Us</h2>
					<p className="text-lg">
						You can reach us through
						<br /> these channels:
					</p>
				</div>

				{/* Right column */}
				<div className="space-y-6">
					{/* Call Us */}
					<div className="flex items-center space-x-4">
						<div className="w-8 h-8 flex items-center justify-center">
							<FiPhone className="w-6 h-6" />
						</div>
						<div>
							<p className="font-semibold text-lg">Call Us</p>
							<p className="text-sm">+00 000 000 0000</p>
						</div>
					</div>

					{/* Email Us */}
					<div className="flex items-center space-x-4">
						<div className="w-8 h-8 flex items-center justify-center">
							<FiMail className="w-6 h-6" />
						</div>
						<div>
							<p className="font-semibold text-lg">Email Us</p>
							<p className="text-sm">hello@neuroliftlearning.com</p>
						</div>
					</div>

					{/* Connect with Us */}
					<div className="flex items-center space-x-4">
						<div className="w-8 h-8 flex items-center justify-center">
							<FiUsers className="w-6 h-6" />
						</div>
						<div>
							<p className="font-semibold text-lg">Connect with Us</p>
							<p className="text-sm">
								Instagram: <span className="text-white">@neuroliftlearn</span>
							</p>
							<p className="text-sm">
								LinkedIn: <span className="text-white">NeuroLift Learning</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default ContactUsFooter;
