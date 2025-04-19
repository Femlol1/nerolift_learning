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
	pageUrl?: string
) => {
	description = sanitizeHtml(description);
	const metadata: Metadata = {
		title: `Neurolift Learning ${title ? "| " + title : " "}`,
		description: `${description ? description : `learn`}`,
		applicationName: "Neurolift Learning",
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
			icon: [{ url: "/favicon/favicon.ico", sizes: "any" }],
			shortcut: ["/assets/images/logo.png"],
			apple: "/favicon/apple-touch-icon.png",
		},
		keywords:
			"neurodiversity, neurodivergent, neurodiverse, autism, ADHD, dyslexia, learning disabilities, support, empowerment, community, events, games night, fun, social interaction",
		openGraph: {
			type: "website",
			url: `${pageUrl ? pageUrl : "/"}`,
			title: `Neurolift Learning | ${title ? title : "Neurolift Learning"}`,
			description: `${description}`,
			siteName: "Neurolift Learning",
			locale: "en_GB",
		},
		assets: "/assets",
		alternates: {
			canonical: `${pageUrl ? pageUrl : "/"}`,
			languages: {
				"en-US": "/en-US",
				"de-DE": "/de-DE",
			},
		},
		category: "learning",
	};

	return metadata;
};
