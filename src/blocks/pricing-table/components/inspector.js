//WordPress dependencies
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { Component,Fragment } from '@wordpress/element';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';

//Create an Inspector Controls wrapper Component
export default class Inspector extends Component {

    render(){
        const {
            attributes: { columns, columnsGap,style_type },
            setAttributes
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
                        label={ __( 'Pricing Columns', 'blockly' ) }
                        value={ columns }
                        onChange={ ( value ) => setAttributes( { columns: value } ) }
                        min={ 1 }
                        max={ 4 }
                    />
                    <RangeControl
                        label={ __('Pricing Columns Gap','blockly') }
                        value={ columnsGap }
                        onChange={ ( value ) => setAttributes( { columnsGap: value } ) }
                        min={ 0 }
                        max={ 5 }
                        step={ 1 }
                    />
                </PanelBody>
            </InspectorControls>

        )
    }

}