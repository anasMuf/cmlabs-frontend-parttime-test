import Skeleton from "../atoms/Skeleton";

export function IngredientGridSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{Array.from({ length: 8 }).map((_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: Skeletons are static and order does not change
				<div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center space-y-4 shadow-sm">
					<Skeleton className="w-24 h-24 rounded-full" />
					<Skeleton className="h-6 w-3/4" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			))}
		</div>
	);
}

export function MealGridSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{Array.from({ length: 8 }).map((_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: Skeletons are static and order does not change
				<div key={i} className="rounded-2xl overflow-hidden aspect-video border border-gray-200 shadow-sm">
					<Skeleton className="w-full h-full" />
				</div>
			))}
		</div>
	);
}

export function MealInfoSkeleton() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div className="space-y-6">
				<Skeleton className="aspect-square rounded-3xl border border-gray-200 shadow-sm" />
				<Skeleton className="h-48 rounded-2xl border border-gray-200 shadow-sm" />
			</div>
			<div className="space-y-6">
				<Skeleton className="h-12 w-3/4" />
				<div className="flex items-center gap-2">
					<Skeleton className="h-px flex-1" />
					<Skeleton className="h-4 w-20" />
					<Skeleton className="h-px flex-1" />
				</div>
				<Skeleton className="h-64 rounded-2xl border border-gray-200 shadow-sm" />
			</div>
		</div>
	);
}
