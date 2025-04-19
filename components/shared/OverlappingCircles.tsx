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
						className="absolute rounded-full overflow-hidden"
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
							className="relative inset-0 w-full h-full object-cover"
							width={diameter}
							height={diameter}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default OverlappingCircles;
