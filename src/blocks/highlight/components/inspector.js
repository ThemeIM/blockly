/**
 * WordPress dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { InspectorControls, PanelColorSettings,FontSizePicker, withFontSizes, withColors, ContrastChecker, } from '@wordpress/block-editor';
 import { Component,Fragment } from '@wordpress/element';
 import { PanelBody } from '@wordpress/components';
 import { compose } from '@wordpress/compose';
 import { BLYblockFontSizePicker } from '../../../utils/components/fontsize-picker';
 
class Inspector extends Component {

    render() {

        const {
            backgroundColor,
            textColor,
            setBackgroundColor,
            setTextColor,
            fallbackBackgroundColor,
            fallbackTextColor,
        } = this.props;

        return(

            <InspectorControls>
                <PanelBody title={ __( 'Highlight settings', 'blockly' ) } className="bly-highlight-font-size">
					<BLYblockFontSizePicker	{ ...this.props } />
				</PanelBody>

            <PanelColorSettings
                title={ __( 'Color settings', 'blockly' ) }
                initialOpen={ false }
                colorSettings={ [
                    {
                        value: backgroundColor.color,
                        onChange: setBackgroundColor,
                        label: __( 'Background color', 'blockly' ),
                    },
                    {
                        value: textColor.color,
                        onChange: setTextColor,
                        label: __( 'Text color', 'blockly' ),
                    },
                ] }
            >
                <ContrastChecker
                    { ...{
                        textColor: textColor.color,
                        backgroundColor: backgroundColor.color,
                        fallbackBackgroundColor,
                        fallbackTextColor,
                    } }
                />
            </PanelColorSettings>

            </InspectorControls>

        );

    }
 }
 export default compose( [
	withColors(
        'backgroundColor',
        { textColor: 'color' }
    ),
	withFontSizes( 'fontSize' ),
] )( Inspector );