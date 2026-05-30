export function buildPageTitle(pageTitle, siteName = 'Portafolio Personal') {
	return pageTitle ? `${pageTitle} | ${siteName}` : siteName;
}
