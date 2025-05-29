//@component/shared/Comparison_Table.tsx
"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ComparisonTable() {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="w-full bg-[#2D2D2D] text-white p-4 sm:p-6 md:p-12 rounded-lg">
			<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-10">
				<span className="text-green-400">NeuroLift</span> vs Traditional
				Learning
			</h1>

			{/* Mobile Card View */}
			<div className="block lg:hidden space-y-4">
				{/* Core Learning */}
				<div className="bg-gray-800 rounded-lg p-4">
					<h3 className="text-green-400 font-medium text-sm mb-3">Core Learning</h3>
					<div className="space-y-3">
						<div>
							<h4 className="text-green-400 text-sm font-medium mb-1">NeuroLift Learning</h4>
							<p className="text-xs text-gray-300">
								Focuses on{" "}
								<span className="text-green-400">
									comprehension over memorization
								</span>
								, enhancing critical thinking, problem-solving, and long-term
								retention.
							</p>
						</div>
						<div>
							<h4 className="text-white text-sm font-medium mb-1">Traditional Learning</h4>
							<p className="text-xs text-gray-300">
								Often emphasises rote memorisation, leading to surface-level
								understanding with limited critical engagement.
							</p>
						</div>
					</div>
				</div>

				{/* Approach to Learning */}
				<div className="bg-gray-800 rounded-lg p-4">
					<h3 className="text-green-400 font-medium text-sm mb-3">Approach to Learning</h3>
					<div className="space-y-3">
						<div>
							<h4 className="text-green-400 text-sm font-medium mb-1">NeuroLift Learning</h4>
							<p className="text-xs text-gray-300">
								Uses brain-gym training,{" "}
								<span className="text-green-400">cognitive exercises</span>, and
								neuroscience-backed techniques to optimise learning efficiency
								and cognitive function.
							</p>
						</div>
						<div>
							<h4 className="text-white text-sm font-medium mb-1">Traditional Learning</h4>
							<p className="text-xs text-gray-300">
								Relies on passive learning, such as{" "}
								<span className="text-green-400">
									lectures, textbooks, and repetitive practice
								</span>
								, which may not cater to different learning styles.
							</p>
						</div>
					</div>
				</div>

				{/* Cognitive Development */}
				<div className="bg-gray-800 rounded-lg p-4">
					<h3 className="text-green-400 font-medium text-sm mb-3">Cognitive Development</h3>
					<div className="space-y-3">
						<div>
							<h4 className="text-green-400 text-sm font-medium mb-1">NeuroLift Learning</h4>
							<p className="text-xs text-gray-300">
								Actively{" "}
								<span className="text-green-400">
									enhances memory, attention, and processing speed
								</span>{" "}
								through targeted cognitive exercises.
							</p>
						</div>
						<div>
							<h4 className="text-white text-sm font-medium mb-1">Traditional Learning</h4>
							<p className="text-xs text-gray-300">
								Primarily focuses on knowledge acquisition, with little emphasis
								on cognitive skill development.
							</p>
						</div>
					</div>
				</div>

				{/* Scientific Foundation */}
				<div className="bg-gray-800 rounded-lg p-4">
					<h3 className="text-green-400 font-medium text-sm mb-3">Scientific Foundation</h3>
					<div className="space-y-3">
						<div>
							<h4 className="text-green-400 text-sm font-medium mb-1">NeuroLift Learning</h4>
							<p className="text-xs text-gray-300">
								Grounded in{" "}
								<span className="text-green-400">neuroscientific research</span>
								, ensuring learning strategies align with how the brain
								processes, retains, and recalls information.
							</p>
						</div>
						<div>
							<h4 className="text-white text-sm font-medium mb-1">Traditional Learning</h4>
							<p className="text-xs text-gray-300">
								Often based on traditional educational methods, with limited
								integration of modern cognitive science.
							</p>
						</div>
					</div>
				</div>

				{/* Personalisation */}
				<div className="bg-gray-800 rounded-lg p-4">
					<h3 className="text-green-400 font-medium text-sm mb-3">Personalisation</h3>
					<div className="space-y-3">
						<div>
							<h4 className="text-green-400 text-sm font-medium mb-1">NeuroLift Learning</h4>
							<p className="text-xs text-gray-300">
								Uses{" "}
								<span className="text-green-400">
									adaptive learning technology
								</span>{" "}
								to tailor training to individual cognitive strengths and
								weaknesses, ensuring a highly personalised approach. For
								example, touch typing training.
							</p>
						</div>
						<div>
							<h4 className="text-white text-sm font-medium mb-1">Traditional Learning</h4>
							<p className="text-xs text-gray-300">
								One-size-fits-all model, which may not fully accommodate
								individual learning needs.
							</p>
						</div>
					</div>
				</div>

				{expanded && (
					<>
						{/* Learning Environment */}
						<div className="bg-gray-800 rounded-lg p-4">
							<h3 className="text-green-400 font-medium text-sm mb-3">Learning Environment</h3>
							<div className="space-y-3">
								<div>
									<h4 className="text-green-400 text-sm font-medium mb-1">NeuroLift Learning</h4>
									<p className="text-xs text-gray-300">
										Creates{" "}
										<span className="text-green-400">
											engaging, interactive environments
										</span>{" "}
										that stimulate multiple senses and promote active
										participation.
									</p>
								</div>
								<div>
									<h4 className="text-white text-sm font-medium mb-1">Traditional Learning</h4>
									<p className="text-xs text-gray-300">
										Often limited to classroom settings with minimal sensory
										engagement or interactive elements.
									</p>
								</div>
							</div>
						</div>

						{/* Progress Tracking */}
						<div className="bg-gray-800 rounded-lg p-4">
							<h3 className="text-green-400 font-medium text-sm mb-3">Progress Tracking</h3>
							<div className="space-y-3">
								<div>
									<h4 className="text-green-400 text-sm font-medium mb-1">NeuroLift Learning</h4>
									<p className="text-xs text-gray-300">
										Utilizes{" "}
										<span className="text-green-400">
											detailed analytics and metrics
										</span>{" "}
										to track cognitive improvement and learning progress in
										real-time.
									</p>
								</div>
								<div>
									<h4 className="text-white text-sm font-medium mb-1">Traditional Learning</h4>
									<p className="text-xs text-gray-300">
										Typically relies on periodic testing and subjective
										assessment with limited feedback loops.
									</p>
								</div>
							</div>
						</div>
					</>
				)}
			</div>

			{/* Desktop Table View */}
			<div className="hidden lg:block overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr className="border-b border-gray-700">
							<th className="py-4 px-2 text-left w-1/4 text-gray-300">
								Features
							</th>
							<th className="py-4 px-2 text-left w-2/5 text-grey-300 font-medium border-x-2 border-gray-700">
								Neurolift Learning
							</th>
							<th className="py-4 px-2 text-left w-2/5 text-white font-medium">
								Traditional Learning
							</th>
						</tr>
					</thead>
					<tbody>
						{/* Core Learning */}
						<tr className="border-b border-gray-700">
							<td className="py-4 px-2 align-top">
								<span className="text-green-400 font-medium">
									Core Learning
								</span>
							</td>
							<td className="py-4 px-2 align-top border-x-2 border-gray-700">
								Focuses on{" "}
								<span className="text-green-400">
									comprehension over memorization
								</span>
								, enhancing critical thinking, problem-solving, and long-term
								retention.
							</td>
							<td className="py-4 px-2 align-top">
								Often emphasises rote memorisation, leading to surface-level
								understanding with limited critical engagement.
							</td>
						</tr>

						{/* Approach to Learning */}
						<tr className="border-b border-gray-700">
							<td className="py-4 px-2 align-top ">
								<span className="text-green-400 font-medium">
									Approach to Learning
								</span>
							</td>
							<td className="py-4 px-2 align-top border-x-2 border-gray-700">
								Uses brain-gym training,{" "}
								<span className="text-green-400">cognitive exercises</span>, and
								neuroscience-backed techniques to optimise learning efficiency
								and cognitive function.
							</td>
							<td className="py-4 px-2 align-top">
								Relies on passive learning, such as{" "}
								<span className="text-green-400">
									lectures, textbooks, and repetitive practice
								</span>
								, which may not cater to different learning styles.
							</td>
						</tr>

						{/* Cognitive Development */}
						<tr className="border-b border-gray-700">
							<td className="py-4 px-2 align-top">
								<span className="text-green-400 font-medium">
									Cognitive Development
								</span>
							</td>
							<td className="py-4 px-2 align-top border-x-2 border-gray-700">
								Actively{" "}
								<span className="text-green-400">
									enhances memory, attention, and processing speed
								</span>{" "}
								through targeted cognitive exercises.
							</td>
							<td className="py-4 px-2 align-top">
								Primarily focuses on knowledge acquisition, with little emphasis
								on cognitive skill development.
							</td>
						</tr>

						{/* Scientific Foundation */}
						<tr className="border-b border-gray-700">
							<td className="py-4 px-2 align-top">
								<span className="text-green-400 font-medium">
									Scientific Foundation
								</span>
							</td>
							<td className="py-4 px-2 align-top border-x-2 border-gray-700">
								Grounded in{" "}
								<span className="text-green-400">neuroscientific research</span>
								, ensuring learning strategies align with how the brain
								processes, retains, and recalls information.
							</td>
							<td className="py-4 px-2 align-top">
								Often based on traditional educational methods, with limited
								integration of modern cognitive science.
							</td>
						</tr>

						{/* Personalisation */}
						<tr className={expanded ? "border-b border-gray-700" : ""}>
							<td className="py-4 px-2 align-top">
								<span className="text-green-400 font-medium">
									Personalisation
								</span>
							</td>
							<td className="py-4 px-2 align-top border-x-2 border-gray-700">
								Uses{" "}
								<span className="text-green-400">
									adaptive learning technology
								</span>{" "}
								to tailor training to individual cognitive strengths and
								weaknesses, ensuring a highly personalised approach. For
								example, touch typing training.
							</td>
							<td className="py-4 px-2 align-top">
								One-size-fits-all model, which may not fully accommodate
								individual learning needs.
							</td>
						</tr>

						{expanded && (
							<>
								{/* Additional rows that would be shown when expanded */}
								<tr className="border-b border-gray-700">
									<td className="py-4 px-2 align-top">
										<span className="text-green-400 font-medium">
											Learning Environment
										</span>
									</td>
									<td className="py-4 px-2 align-top border-x-2 border-gray-700">
										Creates{" "}
										<span className="text-green-400">
											engaging, interactive environments
										</span>{" "}
										that stimulate multiple senses and promote active
										participation.
									</td>
									<td className="py-4 px-2 align-top">
										Often limited to classroom settings with minimal sensory
										engagement or interactive elements.
									</td>
								</tr>
								<tr className="border-b border-gray-700">
									<td className="py-4 px-2 align-top ">
										<span className="text-green-400 font-medium">
											Progress Tracking
										</span>
									</td>
									<td className="py-4 px-2 align-top border-x-2 border-gray-700">
										Utilizes{" "}
										<span className="text-green-400">
											detailed analytics and metrics
										</span>{" "}
										to track cognitive improvement and learning progress in
										real-time.
									</td>
									<td className="py-4 px-2 align-top">
										Typically relies on periodic testing and subjective
										assessment with limited feedback loops.
									</td>
								</tr>
							</>
						)}
					</tbody>
				</table>
			</div>

			<button
				onClick={() => setExpanded(!expanded)}
				className="flex items-center justify-center mx-auto mt-4 md:mt-6 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-400 rounded-md px-3 sm:px-4 py-2"
				aria-expanded={expanded}
				aria-controls="expanded-content"
			>
				<span className="mr-2">READ MORE</span>
				<ChevronDown
					className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform text-green-400 ${
						expanded ? "rotate-180" : ""
					}`}
				/>
			</button>
		</div>
	);
}
