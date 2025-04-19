// components/shared/OverlappingCircles.tsx
import Image from "next/image";
import React from "react";

interface CircleImage {
	src: string;
	alt?: string;
	size?: number; // diameter in px
	zIndex?: number;
	top?: string;
	left?: string;
}

interface OverlappingCirclesProps {
	images: CircleImage[];
}

const OverlappingCircles: React.FC<OverlappingCirclesProps> = ({ images }) => {
	return (
		<div className="relative w-full h-full">
			{images.map((img, idx) => {
				const diameter = img.size || 200;
				return (
					<div
						key={idx}
						className="absolute rounded-full overflow-visible md:mx-0 mx-0 scale-75 md:scale-100"
						style={{
							width: diameter,
							height: diameter,
							top: img.top,
							left: img.left,
							zIndex: img.zIndex ?? 0,
						}}
					>
						{/* image */}
						<Image
							src={img.src}
							alt={img.alt || ""}
							className="relative overflow-hidden rounded-full inset-0 w-full h-full object-cover"
							width={diameter}
							height={diameter}
						/>
						{/* left overlapping circle */}
						<div className="rotate-45 absolute inset-0 w-full h-full">
							<div
								className="absolute rounded-full border-2 border-blue-500"
								style={{
									width: diameter,
									height: diameter,
									top: "0%",
									left: "-5%",
								}}
							></div>
							{/* right overlapping circle */}
							<div
								className="absolute rounded-full border-2 border-green-500"
								style={{
									width: diameter,
									height: diameter,
									top: "0%",
									left: "5%",
								}}
							></div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default OverlappingCircles;
