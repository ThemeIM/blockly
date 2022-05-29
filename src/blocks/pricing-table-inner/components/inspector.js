//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';

export default class Inspector extends Component {

    render() {

        const {
            attributes: {
                borderWidth,
                borderColor,
                borderRadius,
                backgroundColor,
                padding,
            },
            setAttributes,
        } = this.props;

        const onChangeBorderColor = ( value ) =>
            setAttributes( { borderColor: value } );
        const onChangeBackgroundColor = ( value ) =>
            setAttributes( { backgroundColor: value } );

        return (
            <InspectorControls key="inspector">
                <PanelBody>

                    <RangeControl
                        label={ __('Pricing Column Padding', 'blockly' ) }
                        value={ padding }
                        onChange={ ( value ) => setAttributes( { padding: value } ) }
                        min={ 0 }
                        max={ 20 }
                        step={ 1 }
                    />

                    <RangeControl
                        label={ __( 'Pricing Column Border', 'blockly') }
                        value={ borderWidth }
                        onChange={ ( value ) =>setAttributes( { borderWidth: value } )}
                        min={ 0 }
                        max={ 10 }
                        step={ 1 }
                    />

                    <RangeControl
                        label={ __( 'Pricing Column Border Radius', 'blockly') }
                        value={ borderRadius }
                        onChange={ ( value ) =>  setAttributes( { borderRadius: value,} ) }
                        min={ 0 }
                        max={ 20 }
                        step={ 1 }
                    />

                </PanelBody>

                { 0 < borderWidth && (
                    <PanelColorSettings
                        title={ __('Pricing Column Border Color', 'blockly' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: borderColor,
                                onChange: onChangeBorderColor,
                                label: __('Border Color',  'blockly'  ),
                            },
                        ] }
                    >
                    </PanelColorSettings>
                ) }

                <PanelColorSettings
                    title={ __( 'Pricing Column Background Color', 'blockly') }
                    initialOpen={ false }
                    colorSettings={ [
                        {
                            value: backgroundColor,
                            onChange: onChangeBackgroundColor,
                            label: __('Background Color','blockly'),
                        },
                    ] }
                >
                </PanelColorSettings>
            </InspectorControls>

        );
    }
}
 