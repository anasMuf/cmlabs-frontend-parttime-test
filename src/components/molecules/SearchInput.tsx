import { Search, X } from "lucide-react";

interface SearchInputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export default function SearchInput({
	value,
	onChange,
	placeholder = "Search...",
}: SearchInputProps) {
	return (
		<div className="relative w-full max-w-md mx-auto mb-8 animate-rise-in">
			<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
				<Search className="w-5 h-5 text-gray-400" />
			</div>
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder}
				className="block w-full py-3 pl-11 pr-11 text-sm bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
			/>
			{value && (
				<button
					type="button"
					onClick={() => onChange("")}
					className="absolute inset-y-0 right-0 flex items-center pr-4 hover:text-blue-600 transition-colors"
					aria-label="Clear search"
				>
					<X className="w-5 h-5 text-gray-400 hover:text-blue-600" />
				</button>
			)}
		</div>
	);
}
