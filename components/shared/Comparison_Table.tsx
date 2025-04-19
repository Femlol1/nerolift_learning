"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ComparisonTable() {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="w-full bg-gray-900 text-white p-6 md:p-12 rounded-lg">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
				NeuroLift vs Traditional Learning
			</h1>

			<div className="overflow-x-auto">
				<table className="w-full border-collapse">
					<thead>
						<tr className="border-b border-gray-700">
							<th className="py-4 px-2 text-left w-1/4 text-gray-300">
								Features
							</th>
							<th className="py-4 px-2 text-left w-2/5 text-green-400 font-medium">
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
								<span className="text-blue-400 font-medium">Core Learning</span>
							</td>
							<td className="py-4 px-2 align-top">
								Focuses on{" "}
								<span className="text-blue-400">
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
							<td className="py-4 px-2 align-top">
								<span className="text-blue-400 font-medium">
									Approach to Learning
								</span>
							</td>
							<td className="py-4 px-2 align-top">
								Uses brain-gym training,{" "}
								<span className="text-blue-400">cognitive exercises</span>, and
								neuroscience-backed techniques to optimise learning efficiency
								and cognitive function.
							</td>
							<td className="py-4 px-2 align-top">
								Relies on passive learning, such as{" "}
								<span className="text-blue-400">
									lectures, textbooks, and repetitive practice
								</span>
								, which may not cater to different learning styles.
							</td>
						</tr>

						{/* Cognitive Development */}
						<tr className="border-b border-gray-700">
							<td className="py-4 px-2 align-top">
								<span className="text-blue-400 font-medium">
									Cognitive Development
								</span>
							</td>
							<td className="py-4 px-2 align-top">
								Actively{" "}
								<span className="text-blue-400">
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
								<span className="text-blue-400 font-medium">
									Scientific Foundation
								</span>
							</td>
							<td className="py-4 px-2 align-top">
								Grounded in{" "}
								<span className="text-blue-400">neuroscientific research</span>,
								ensuring learning strategies align with how the brain processes,
								retains, and recalls information.
							</td>
							<td className="py-4 px-2 align-top">
								Often based on traditional educational methods, with limited
								integration of modern cognitive science.
							</td>
						</tr>

						{/* Personalisation */}
						<tr className={expanded ? "border-b border-gray-700" : ""}>
							<td className="py-4 px-2 align-top">
								<span className="text-blue-400 font-medium">
									Personalisation
								</span>
							</td>
							<td className="py-4 px-2 align-top">
								Uses{" "}
								<span className="text-blue-400">
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
										<span className="text-blue-400 font-medium">
											Learning Environment
										</span>
									</td>
									<td className="py-4 px-2 align-top">
										Creates{" "}
										<span className="text-blue-400">
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
									<td className="py-4 px-2 align-top">
										<span className="text-blue-400 font-medium">
											Progress Tracking
										</span>
									</td>
									<td className="py-4 px-2 align-top">
										Utilizes{" "}
										<span className="text-blue-400">
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
				className="flex items-center justify-center mx-auto mt-6 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-400 rounded-md px-4 py-2"
				aria-expanded={expanded}
				aria-controls="expanded-content"
			>
				<span className="mr-2">READ MORE</span>
				<ChevronDown
					className={`w-4 h-4 transition-transform ${
						expanded ? "rotate-180" : ""
					}`}
				/>
			</button>
		</div>
	);
}
