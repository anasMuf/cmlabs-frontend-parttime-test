import { useRouter } from "@tanstack/react-router";
import SectionTitle from "#/components/atoms/SectionTitle";

export default function ErrorComponent({ error }: { error: Error }) {
	const router = useRouter();

	return (
		<div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-rise-in">
			<div className="p-10 bg-white border border-gray-200 rounded-3xl shadow-sm max-w-lg">
				<div className="text-5xl mb-6">😕</div>
				<SectionTitle as="h2">Something went wrong</SectionTitle>
				<p className="text-gray-500 mb-8">
					{error.message ||
						"An unexpected error occurred while fetching the data."}
				</p>
				<button
					type="button"
					onClick={() => router.invalidate()}
					className="rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:scale-105"
				>
					Try Again
				</button>
			</div>
		</div>
	);
}
