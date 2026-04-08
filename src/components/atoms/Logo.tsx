import { Link } from "@tanstack/react-router";

export default function Logo() {
	return (
		<Link
			to="/"
			className="text-xl font-bold tracking-tight no-underline text-slate-900"
		>
			mealapp
		</Link>
	);
}
