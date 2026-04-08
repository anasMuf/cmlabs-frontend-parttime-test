import type { ReactNode } from "react";

interface SectionTitleProps {
	children: ReactNode;
	as?: "h1" | "h2" | "h3";
}

export default function SectionTitle({
	children,
	as: Tag = "h1",
}: SectionTitleProps) {
	const sizeClasses = {
		h1: "text-4xl sm:text-5xl font-bold mb-6",
		h2: "text-2xl font-bold mb-4",
		h3: "text-lg font-bold mb-2",
	};

	return (
		<Tag
			className={`leading-tight tracking-tight text-slate-900 ${sizeClasses[Tag]}`}
		>
			{children}
		</Tag>
	);
}
