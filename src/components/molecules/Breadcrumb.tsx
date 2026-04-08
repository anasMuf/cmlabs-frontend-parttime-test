import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { Fragment } from "react";

interface BreadcrumbItem {
	label: string;
	to?: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 scrollbar-none">
			<Link
				to="/"
				className="flex items-center hover:text-blue-600 transition-colors"
			>
				<Home className="w-4 h-4" />
			</Link>

			{items.map((item, index) => (
				<Fragment key={item.label}>
					<ChevronRight className="w-4 h-4 shrink-0" />
					{item.to && index < items.length - 1 ? (
						<Link
							to={item.to}
							className="hover:text-blue-600 transition-colors truncate max-w-[150px]"
						>
							{item.label}
						</Link>
					) : (
						<span className="font-semibold text-slate-900 truncate max-w-[200px]">
							{item.label}
						</span>
					)}
				</Fragment>
			))}
		</nav>
	);
}
