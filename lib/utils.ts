import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

import type { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatDateTime = (dateString: Date) => {
	const dateTimeOptions: Intl.DateTimeFormatOptions = {
		weekday: "short", // abbreviated weekday name (e.g., 'Mon')
		month: "short", // abbreviated month name (e.g., 'Oct')
		day: "numeric", // numeric day of the month (e.g., '25')
		hour: "numeric", // numeric hour (e.g., '8')
		minute: "numeric", // numeric minute (e.g., '30')
		hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
	};

	const dateOptions: Intl.DateTimeFormatOptions = {
		weekday: "short", // abbreviated weekday name (e.g., 'Mon')
		month: "short", // abbreviated month name (e.g., 'Oct')
		year: "numeric", // numeric year (e.g., '2023')
		day: "numeric", // numeric day of the month (e.g., '25')
	};

	const timeOptions: Intl.DateTimeFormatOptions = {
		hour: "numeric", // numeric hour (e.g., '8')
		minute: "numeric", // numeric minute (e.g., '30')
		hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
	};

	const formattedDateTime: string = new Date(dateString).toLocaleString(
		"en-UK",
		dateTimeOptions
	);

	const formattedDate: string = new Date(dateString).toLocaleString(
		"en-UK",
		dateOptions
	);

	const formattedTime: string = new Date(dateString).toLocaleString(
		"en-UK",
		timeOptions
	);

	return {
		dateTime: formattedDateTime,
		dateOnly: formattedDate,
		timeOnly: formattedTime,
	};
};
export function toLocalDatetimeString(dateString: string | Date) {
	const date = new Date(dateString);
	const tzOffset = date.getTimezoneOffset() * 60000; // offset in milliseconds
	const localISOTime = new Date(date.getTime() - tzOffset)
		.toISOString()
		.slice(0, 16);
	return localISOTime;
}

export function toUTCDatetimeString(localDatetime: string) {
	const date = new Date(localDatetime);
	return date.toISOString();
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export const formatPrice = (price: string) => {
	const amount = parseFloat(price);
	const formattedPrice = new Intl.NumberFormat("en-UK", {
		style: "currency",
		currency: "GBP",
	}).format(amount);

	return formattedPrice;
};

export const formatPath = (path: string) => {
	return path
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/copy/g, "") // fix copy in url when clonning events
		.replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
		.replace(/^-|-$/g, ""); // Remove leading and trailing hyphens
};

export const handleError = (error: unknown) => {
	console.error(error);
	throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};

export function sanitizeHtml(val: string | undefined) {
	const disAllowedTags = /<\/?[^>]+(>|$)/g;
	const strippedHtml = val?.replace(disAllowedTags, " ");
	return strippedHtml?.replace(/\s+/g, " ").trim();
}

export const DefineMeta = (
	// all description propertie set as array
	title?: string,
	description?: string,
	pageUrl?: string,
	openGraphImgUrl?: string
) => {
	description = sanitizeHtml(description);
	const metadata: Metadata = {
		metadataBase: new URL("https://www.kunlesgamesnight.com"),
		title: `Kunle's Games Night ${title ? "| " + title : " "}`,
		description: `${
			description
				? description
				: `Your Ultimate Destination for Fun Game Nights and Events!

Looking for an exciting night out with friends, family, or colleagues? Kunle's Games Night Company offers unforgettable game nights filled with laughter, friendly competition, and thrilling showdowns. Our gatherings are perfect for everyone, from casual players to serious gamers. Enjoy a vast selection of board games, card games, and interactive party games that bring people together. Whether you’re in the mood for classic games like Monopoly and Scrabble or newer, fast-paced options, there’s something for everyone at Kunle's Games Night!

Why Choose Kunle's Games Night Company?
Wide Game Variety: With games for all ages and skill levels, we ensure everyone has a blast.
Inclusive Environment: Join a friendly community, whether you’re solo or with a group.
Exciting Tournaments & Prizes: Enter fun competitions for a chance to win fantastic prizes.
Snacks & Refreshments: Enjoy delicious food and drinks while you play.
Expert Hosts: Our knowledgeable hosts create a fun, high-energy atmosphere from start to finish.
Book Your Next Game Night Experience Today!
Conveniently located in London, Kunle's Games Night Company is the go-to venue for birthdays, team-building events, and casual hangouts. With comfortable seating, lively décor, and friendly service, our game nights are the perfect blend of social interaction and entertainment.


Follow us on Facebook, Instagram, and Twitter for the latest updates on upcoming game nights and special events. Join the excitement at Kunle's Games Night Company,where every night is a game night!`
		}`,
		applicationName: "Kunle's Games Night",
		creator: "Osifemi Osibemekun",
		robots: {
			index: true,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		icons: {
			icon: [
				"/favicon.ico",
				"/assets/images/logo.png",
				"/favicon/android-chrome-512x512.png",
				"/favicon/android-chrome-192x192.png",
				"/favicon/apple-touch-icon.png",
				"/favicon/favicon-16x16.png",
				"/favicon/favicon-32x32.png",
				"/favicon/favicon.ico",
			],
			shortcut: ["/assets/images/logo.png"],
			apple: "/favicon/apple-touch-icon.png",
		},
		keywords:
			"events,kgn events, games night, fun, tickets, event details, kunles games, kunle's games, games, concerts, sports, tournaments, weekend events, saturday events, easter events, festivals, events in town, halloween, supernatural, play, game night, play games, games night in k, events in london,summer events, weekend events in k, events in london, summer events in k, winter events in k, saturday events in k, sunday events in k, easter events in k, winter events, KGN, kgn ",
		manifest: "https://www.kunlesgamesnight.com/favicon/site.webmanifest",
		openGraph: {
			type: "website",
			url: `${pageUrl ? pageUrl : "/"}`,
			title: `KGN | ${title ? title : "Kunle's Games Night"}`,
			description: `${description}`,
			siteName: "Kunle's Games Night",
			locale: "en_GB",

			images: [
				{
					url: `${
						openGraphImgUrl === undefined
							? "https://www.kunlesgamesnight.com/assets/images/logo.png"
							: openGraphImgUrl
					}`,
					alt: `${title ? title : "Kunle's Games Night"}`,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `KGN | ${title ? title : "Kunle's Games Night"}`,
			site: `${pageUrl ? pageUrl : "/"}`,
			creator: "@osifemi",
			images: {
				url: `${
					openGraphImgUrl === undefined
						? "https://www.kunlesgamesnight.com/assets/images/logo.png"
						: openGraphImgUrl
				}`,
				alt: `${title ? title : "Kunle's Games Night"} Logo`,
			},
		},
		assets: "/assets",
		alternates: {
			canonical: `${pageUrl ? pageUrl : "/"}`,
			languages: {
				"en-US": "/en-US",
				"de-DE": "/de-DE",
			},
		},
		category: "event",
	};

	return metadata;
};
