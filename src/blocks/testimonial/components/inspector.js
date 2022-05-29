/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { Component,Fragment } from '@wordpress/element';

// Import Inspector components
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';

/**
 * Create an Inspector Controls wrapper Component
 */
 export default class Inspector extends Component {

	render() {

        // Cite Alignment Options
		const citeAlignOptions = [
			{
				value: 'left-aligned',
				label: __( 'Left Aligned', 'blockly' ),
			},
			{
				value: 'right-aligned',
				label: __( 'Right Aligned', 'blockly' ),
			},
		];

		// Setup the attributes
		const {
			attributes: {
				testimonialBackgroundColor,
				testimonialTextColor,
				testimonialFontSize,
				testimonialCiteAlign,
                style_type,
			},
			setAttributes,
		} = this.props;

        const style_types = [
            { value: 'style_one', label: 'Style One' },
            { value: 'style_two', label: 'Style Two' },
        ];

        return(

            <InspectorControls>

                <PanelBody>
                    <SelectControl
                        label = 'Please select the style component.'
                        options = { style_types } 
                        value = { style_type }
                        onChange = { style_type => { setAttributes( { style_type } ) } }
                    />

                    <RangeControl
                        label= { __( 'Font Size', 'blockly' ) }
                        value= { testimonialFontSize }
                        onChange= { ( value ) => setAttributes( { testimonialFontSize: value, } ) }
                        min={ 14 }
                        max={ 24 }
                        step={ 1 }
                    />
                </PanelBody>


                <PanelColorSettings
                    title={ __( 'Color Settings' ) }
                    colorSettings={ [
                        {
                            value: testimonialBackgroundColor,
                            onChange: ( testimonialBackgroundColor ) => setAttributes( { testimonialBackgroundColor } ),
                            label: __( 'Background Color' ),
                        },
                        {
                            value: testimonialTextColor,
                            onChange: ( testimonialTextColor ) => setAttributes( { testimonialTextColor } ),
                            label: __( 'Text Color' ),
                        },
                    ] }
                >
                </PanelColorSettings>

            </InspectorControls>

        );

    }
}