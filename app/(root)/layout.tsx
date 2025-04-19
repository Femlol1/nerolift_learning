import { DefineMeta } from "@/lib/utils";

export const metadata = DefineMeta(
	"",
	"Join us for thrilling gatherings of friends, laughter, and epic gaming showdowns!"
);
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen flex-col">
			<main className="flex-1">{children}</main>
		</div>
	);
}
