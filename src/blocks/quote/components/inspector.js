//WordPress dependencies
import { __ } from '@wordpress/i18n';
import { Component,Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {SelectControl,PanelBody,CheckboxControl,RangeControl} from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings,withFontSizes, withColors, ContrastChecker, } from '@wordpress/block-editor';
//internal dependencie
import { BLYblockFontSizePicker } from '../../../utils/components/fontsize-picker';
 
class Inspector extends Component {

    render(){

        const style_types = [
            { value: 'style_one', label: 'Style One' },
            { value: 'style_two', label: 'Style Two' },
        ];

        const { 
            attributes:{
                name_show_hide,
                padding,
                borderRadius,
                style_type,
            },
            backgroundColor,
            textColor,
            iconColor,
            setBackgroundColor,
            setTextColor,
            setIconColor,
            fallbackBackgroundColor,
            fallbackTextColor,
            setAttributes,
        } = this.props;

        return(
            <InspectorControls>

                <PanelBody>
                    <SelectControl
                        label = 'Please select the style component.'
                        options = { style_types } 
                        value = { style_type }
                        onChange = { style_type => { setAttributes( { style_type } ) } }
                    />
                </PanelBody>

                <PanelBody title={ __( 'Quote settings', 'blockly' ) } className="bly-highlight-font-size">
					<BLYblockFontSizePicker	{ ...this.props } />
				</PanelBody>

                <PanelBody>
                    <RangeControl
                        label={ __('Padding', 'blockly' ) }
                        value={ padding }
                        onChange={ ( value ) => setAttributes( { padding: value } ) }
                        min={ 0 }
                        max={ 100 }
                        step={ 1 }
                    />
                    <RangeControl
                        label={ __( 'Border Radius', 'blockly') }
                        value={ borderRadius }
                        onChange={ ( value ) =>  setAttributes( { borderRadius: value,} ) }
                        min={ 0 }
                        max={ 20 }
                        step={ 1 }
                    />
                </PanelBody>
               
                {style_type == 'style_one' && (
                    <PanelBody>
                        <CheckboxControl 
                            heading="Please select if the name should be Show."
                            label="name show?"
                            checked={ name_show_hide }
                            onChange={ name_show_hide => { setAttributes( { name_show_hide } ) } }
                        />
                    </PanelBody>
                )}

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
                        {
                            value: iconColor.color,
                            onChange: setIconColor,
                            label: __( 'Icon color', 'blockly' ),
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
        )
    }
}
export default compose( [
	withColors(
        'backgroundColor',
        { textColor: 'color' },
        { iconColor: 'color' }
    ),
	withFontSizes( 'fontSize' ),
] )( Inspector );