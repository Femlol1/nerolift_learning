// components/shared/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	children,
	className = "",
	...props
}) => (
	<button
		{...props}
		className={`
      inline-block
      bg-white
      text-[#00C869]
      font-lg
      text-3xl
      rounded-lg
      font-bold
      px-4 py-3
      shadow-[6px_6px_0_rgba(0,0,0)]
      hover:shadow-[3px_3px_0_rgba(0,0,0)]
      transition-shadow
      border-2
      border-black
       ${className}
    `}
	>
		{children}
	</button>
);

export default Button;
