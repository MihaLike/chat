function padTo2Digits(num: number): string {
	return num.toString().padStart(2, '0');
}

export function formatDate(date: Date): string {
	return `${[padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(':')} ${[].join(':')}`;
}
