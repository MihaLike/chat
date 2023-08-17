function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}

export function formatDate(date) {
	if (date == 'Invalid Date') {
		return '';
	}
	return `${[padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes())].join(':')} ${[].join(':')}`;
}
