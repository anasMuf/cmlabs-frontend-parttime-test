import type { ReactNode } from "react";

interface TagProps {
	children: ReactNode;
	variant?: "default" | "accent";
}

export default function Tag({ children, variant = "default" }: TagProps) {
	const baseClasses =
		"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border";
	const variants = {
		default: "bg-slate-100 text-slate-600 border-slate-200",
		accent: "bg-blue-50 text-blue-600 border-blue-100",
	};

	return (
		<span className={`${baseClasses} ${variants[variant]}`}>{children}</span>
	);
}
