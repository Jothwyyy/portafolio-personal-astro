export function isExternalLink(href) {
	return href.startsWith('http://') || href.startsWith('https://');
}
