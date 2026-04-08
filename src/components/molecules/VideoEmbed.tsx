interface VideoEmbedProps {
	youtubeUrl: string | null;
}

export default function VideoEmbed({ youtubeUrl }: VideoEmbedProps) {
	if (!youtubeUrl) return null;

	// Extract video ID from various YouTube URL formats
	const videoId = youtubeUrl.match(
		/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*\/v\/))([\w-]{11})/,
	)?.[1];

	if (!videoId) return null;

	return (
		<div className="mt-12 animate-rise-in">
			<h3 className="text-xl font-bold text-slate-900 mb-4">
				Tutorial Video
			</h3>
			<div className="relative aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-200">
				<iframe
					src={`https://www.youtube.com/embed/${videoId}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					className="absolute inset-0 w-full h-full"
				/>
			</div>
		</div>
	);
}
