/**
 * computeFontSize will return numeric fontSize value with appropriate css string suffix
 * `em, px, or rem`.
 * @param {Object|string} fontSize Object passed from withFontSizes HOC props or fontsize value.
 * @return {string} fontSize string value that is ready for inline CSS.
 */
 export const computeFontSize = ( fontSize ) => {
	const size = fontSize?.size ?? fontSize;
	return RegExp( /([a-z])/ ).test( size ) ? size : size + 'px';
};
