import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import Footer from "#/components/organisms/Footer";
import Header from "#/components/organisms/Header";

import appCss from "../styles.css?url";

interface MyRootRouteContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRootRouteContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "MealApp — Discover Ingredients & Recipes",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { queryClient } = Route.useRouteContext();

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere selection:bg-blue-100">
				<QueryClientProvider client={queryClient}>
					<div className="min-h-screen flex flex-col">
						<Header />
						<main className="flex-1 flex flex-col">{children}</main>
						<Footer />
					</div>
				</QueryClientProvider>
				<Scripts />
			</body>
		</html>
	);
}
