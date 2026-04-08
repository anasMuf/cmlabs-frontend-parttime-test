import { Link } from "@tanstack/react-router";

interface MealCardProps {
	id: string;
	name: string;
	thumbnail: string;
}

export default function MealCard({ id, name, thumbnail }: MealCardProps) {
	return (
		<Link
			to="/meals/$mealId"
			params={{ mealId: id }}
			className="group relative block overflow-hidden rounded-2xl aspect-video no-underline"
		>
			<img
				src={thumbnail}
				alt={name}
				loading="lazy"
				className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
				<h3 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors line-clamp-2">
					{name}
				</h3>
			</div>
		</Link>
	);
}
