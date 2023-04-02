export function isoToLongDate(isoDate: string): string {
	const date: Date = new Date(isoDate);
	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	};

	return date.toLocaleDateString("en-US", options);
}
