import ComparisonTable from "@/components/shared/Comparison_Table";
import Home_Landing from "@/components/shared/Home_Landing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Home_Landing />
			<ComparisonTable />
			<div className="flex flex-col min-h-screen">
				<header className="sticky top-0 z-50 w-full border-b bg-white">
					<div className="container flex h-16 items-center justify-between">
						<Link href="/" className="flex items-center space-x-2">
							<Image
								src="/logo-placeholder.svg"
								alt="Logo"
								width={40}
								height={40}
							/>
							<span className="text-l font-bold">NeuroLift Learning</span>
						</Link>
						<nav className="hidden md:flex space-x-6">
							<Link
								href="#about"
								className="text-sm font-medium hover:text-teal-600 transition-colors"
							>
								Abouts
							</Link>
							<Link
								href="#services"
								className="text-sm font-medium hover:text-teal-600 transition-colors"
							>
								Services
							</Link>
							<Link
								href="#reviews"
								className="text-sm font-medium hover:text-teal-600 transition-colors"
							>
								Reviews
							</Link>
							<Link
								href="#apply"
								className="text-sm font-medium hover:text-teal-600 transition-colors"
							>
								Apply
							</Link>
							<Link
								href="#contact"
								className="text-sm font-medium hover:text-teal-600 transition-colors"
							>
								Contact
							</Link>
						</nav>
						<Button className="bg-teal-600 hover:bg-teal-700">Book Now</Button>
					</div>
				</header>

				<main className="flex-grow">
					<section className="bg-light-blue py-20">
						<div className="container">
							<div className="max-w-3xl mx-auto text-center">
								<h1 className="text-4xl font-bold mb-6">
									Empowering Minds, Unlocking Potential
								</h1>
								<p className="text-xl mb-8">
									NeuroLift Learning provides innovative solutions for cognitive
									enhancement and learning support.
								</p>
								<Button className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3">
									Discover Our Approach
								</Button>
							</div>
						</div>
					</section>

					<section id="about" className="py-20">
						<div className="container">
							<h2 className="text-3xl font-bold mb-8 text-center">
								About NeuroLift Learning
							</h2>
							<div className="grid md:grid-cols-2 gap-12 items-center">
								<div>
									<p className="text-lg mb-4">
										NeuroLift Learning is at the forefront of cognitive
										enhancement and learning support. We specialize in helping
										both adults and children with neurological deficiencies,
										cognitive decline, and learning difficulties such as ADHD
										and dyslexia.
									</p>
									<p className="text-lg mb-4">
										Our approach goes beyond traditional tutoring, offering
										comprehensive solutions that are grounded in neuroscience
										and tailored to each individual&apos;s unique needs.
									</p>
								</div>
								<div className="bg-light-blue rounded-lg p-8">
									<h3 className="text-xl font-semibold mb-4">Our Purpose</h3>
									<p className="text-lg">
										To empower individuals with cognitive challenges to reach
										their full potential through innovative, science-based
										learning strategies and personalized support.
									</p>
								</div>
							</div>
						</div>
					</section>

					<section id="services" className="bg-white py-20">
						<div className="container">
							<h2 className="text-3xl font-bold mb-12 text-center">
								Our Services
							</h2>
							<div className="grid md:grid-cols-3 gap-8">
								{[
									"Cognitive Enhancement Programs",
									"Personalized Learning Strategies",
									"Neurodevelopmental Support",
								].map((service, index) => (
									<div
										key={index}
										className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
									>
										<h3 className="text-xl font-semibold mb-4">{service}</h3>
										<p className="text-gray-600">
											Tailored solutions to address specific cognitive and
											learning challenges, leveraging cutting-edge neuroscience
											research.
										</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section id="reviews" className="bg-light-blue py-20">
						<div className="container">
							<h2 className="text-3xl font-bold mb-12 text-center">
								Client Success Stories
							</h2>
							<div className="grid md:grid-cols-2 gap-8">
								{[
									{
										name: "Sarah M.",
										text: "NeuroLift Learning has been transformative for my son with ADHD. The personalized approach and dedication of the team have led to significant improvements in his focus and academic performance.",
									},
									{
										name: "John D.",
										text: "As an adult dealing with cognitive decline, I was skeptical at first. But the programs at NeuroLift have helped me regain confidence and improve my memory. Highly recommended!",
									},
								].map((review, index) => (
									<div
										key={index}
										className="bg-white p-6 rounded-lg shadow-md"
									>
										<p className="italic mb-4">&quot;{review.text}&quot;</p>
										<p className="font-semibold">- {review.name}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section id="apply" className="py-20">
						<div className="container max-w-2xl">
							<h2 className="text-3xl font-bold mb-8 text-center">
								Apply for Our Programs
							</h2>
							<form className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium mb-2"
									>
										Full Name
									</label>
									<Input id="name" placeholder="Enter your full name" />
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium mb-2"
									>
										Email Address
									</label>
									<Input
										id="email"
										type="email"
										placeholder="Enter your email address"
									/>
								</div>
								<div>
									<label
										htmlFor="program"
										className="block text-sm font-medium mb-2"
									>
										Program of Interest
									</label>
									<select id="program" className="w-full border rounded-md p-2">
										<option>Cognitive Enhancement</option>
										<option>Learning Strategies</option>
										<option>Neurodevelopmental Support</option>
									</select>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium mb-2"
									>
										Additional Information
									</label>
									<Textarea
										id="message"
										placeholder="Tell us about your specific needs or challenges"
									/>
								</div>
								<Button
									type="submit"
									className="w-full bg-teal-600 hover:bg-teal-700"
								>
									Submit Application
								</Button>
							</form>
						</div>
					</section>

					<section id="contact" className="bg-light-blue py-20">
						<div className="container">
							<h2 className="text-3xl font-bold mb-8 text-center">
								Contact Us
							</h2>
							<div className="grid md:grid-cols-2 gap-12 items-center">
								<div>
									<p className="text-lg mb-4">
										Have questions or want to schedule a consultation? Our team
										is here to help you navigate your journey towards cognitive
										enhancement and improved learning.
									</p>
									<ul className="space-y-2">
										<li className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 mr-2 text-teal-600"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
													clipRule="evenodd"
												/>
											</svg>
											info@neuroliftlearning.com
										</li>
										<li className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 mr-2 text-teal-600"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
													clipRule="evenodd"
												/>
											</svg>
											+44 73777777777
										</li>
									</ul>
								</div>
								<div>
									<form className="space-y-4">
										<Input placeholder="Your Name" />
										<Input type="email" placeholder="Your Email" />
										<Textarea placeholder="Your Message" rows={4} />
										<Button
											type="submit"
											className="w-full bg-teal-600 hover:bg-teal-700"
										>
											Send Message
										</Button>
									</form>
								</div>
							</div>
						</div>
					</section>
				</main>

				<footer className="bg-gray-900 text-white py-8">
					<div className="container">
						<div className="grid md:grid-cols-3 gap-8">
							<div>
								<h3 className="text-lg font-semibold mb-4">
									NeuroLift Learning
								</h3>
								<p className="text-sm text-gray-400">
									Empowering minds through innovative cognitive solutions.
								</p>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
								<ul className="space-y-2 text-sm text-gray-400">
									<li>
										<Link href="#about">About Us</Link>
									</li>
									<li>
										<Link href="#services">Our Services</Link>
									</li>
									<li>
										<Link href="#reviews">Reviews</Link>
									</li>
									<li>
										<Link href="#apply">Apply</Link>
									</li>
									<li>
										<Link href="#contact">Contact</Link>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
								<div className="flex space-x-4">
									{["facebook", "twitter", "linkedin", "instagram"].map(
										(social) => (
											<a
												key={social}
												href={`#${social}`}
												className="text-gray-400 hover:text-white"
											>
												<span className="sr-only">{social}</span>
												<svg
													className="h-6 w-6"
													fill="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										)
									)}
								</div>
							</div>
						</div>
						<div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
							© {new Date().getFullYear()} NeuroLift Learning. All rights
							reserved.
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
