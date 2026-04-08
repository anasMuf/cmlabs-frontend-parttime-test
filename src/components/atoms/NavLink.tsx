import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface NavLinkProps {
	to: string;
	children: ReactNode;
}

export default function NavLink({ to, children }: NavLinkProps) {
	return (
		<Link
			to={to}
			className="relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 after:transition-transform hover:after:scale-x-100"
			activeProps={{ 
				className: "relative text-sm font-semibold text-slate-900 transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-100" 
			}}
		>
			{children}
		</Link>
	);
}
