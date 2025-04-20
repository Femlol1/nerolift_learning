// src/components/ContactUsFooter.tsx
import React from "react";
import { FiMail, FiPhone, FiUsers } from "react-icons/fi";

const ContactUsFooter: React.FC = () => {
	return (
		<footer className="bg-blue-600 text-white py-12 px-6">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
				{/* Left column */}
				<div className="text-center md:text-left mb-8 md:mb-0">
					<h2 className="text-3xl font-bold">Contact Us</h2>
					<p className="mt-2 text-lg">
						You can reach us through these channels:
					</p>
				</div>

				{/* Right column */}
				<div className="space-y-8">
					{/* Call Us */}
					<div className="flex items-start space-x-4">
						<FiPhone className="w-6 h-6 mt-1 flex-shrink-0" />
						<div>
							<p className="font-semibold">Call Us</p>
							<p className="mt-1 text-sm">+00 000 000 0000</p>
						</div>
					</div>

					{/* Email Us */}
					<div className="flex items-start space-x-4">
						<FiMail className="w-6 h-6 mt-1 flex-shrink-0" />
						<div>
							<p className="font-semibold">Email Us</p>
							<p className="mt-1 text-sm">hello@neuroliftlearning.com</p>
						</div>
					</div>

					{/* Connect with Us */}
					<div className="flex items-start space-x-4">
						<FiUsers className="w-6 h-6 mt-1 flex-shrink-0" />
						<div>
							<p className="font-semibold">Connect with Us</p>
							<p className="mt-1 text-sm">
								Instagram:{" "}
								<a href="#" className="underline">
									@neuroliftlearn
								</a>
							</p>
							<p className="text-sm">
								LinkedIn:{" "}
								<a href="#" className="underline">
									NeuroLift Learning
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default ContactUsFooter;
