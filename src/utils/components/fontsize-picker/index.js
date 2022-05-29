import { FontSizePicker } from '@wordpress/block-editor';

/**
 * BLYblockFontSizePicker is a functional component to interface `withFontSizes` hoc to FontSizePicker controls.
 * @param {Object} props Accepts block props provided by `withFontSizes`.
 */

export const BLYblockFontSizePicker = ( props ) => {

    const { fallbackFontSize, fontSize, setFontSize } = props;

    return (
        <FontSizePicker
            fallbackFontSize={ fallbackFontSize }
            value={ fontSize.size }
            onChange={ ( value ) => {
                const fontSizeValue = value ? parseInt( value, 10 ) : undefined;
                if ( ! Number.isNaN( fontSizeValue ) ) {
                    setFontSize( fontSizeValue );
                }
            } }
        />
    );
};
 