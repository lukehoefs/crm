export function gmailComposeUrl(email: string): string {
	const to = encodeURIComponent(email.trim());
	return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`;
}
