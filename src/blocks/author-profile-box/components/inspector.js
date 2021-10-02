//wordpress dependencies
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl, TextControl } from '@wordpress/components';

//Inspector component
export default class Inspector extends Component {

    render(){
        const { 
            attributes:{
                profileFontSize,
                profileBackgroundColor,
                profileTextColor,
                profileLinkColor,
                twitter,
                facebook,
                instagram,
                pinterest,
                google,
                youtube,
                github,
                linkedin,
                wordpress,
                email,
                website,
                profileAvatarShape,
                style_type,
                padding,
                borderRadius
            },
            setAttributes 
        } = this.props;


		const profileAvatarShapeOptions = [
			{ value: 'square', label: __( 'Square', 'blockly' ) },
			{ value: 'round', label: __( 'Round', 'blockly' ) },
		];

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
                </PanelBody>

                <PanelBody>
                    <RangeControl 
                        label={ __( 'Font Size', 'blockly' ) }
                        value={ profileFontSize }
                        onChange={ ( value ) =>setAttributes( {  profileFontSize: value } )}
                        min={ 14 }
                        max={ 24 }
                        step={ 1 }
                    />
                    <SelectControl
                        label={ __( 'Avatar Shape', 'blockly' ) }
                        description={ __('Choose between a round or square avatar shape.','blockly' ) }
                        options={ profileAvatarShapeOptions }
                        value={ profileAvatarShape }
                        onChange={ ( value ) => setAttributes( {  profileAvatarShape: value } )
                        }
                    />
                </PanelBody>

                <PanelBody>
                    <RangeControl
                        label={ __('Padding', 'blockly' ) }
                        value={ padding }
                        onChange={ ( value ) => setAttributes( { padding: value } ) }
                        min={ 0 }
                        max={ 10 }
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

                <PanelColorSettings
                    title={ __( 'Color Settings' ) }
                    colorSettings={ [
                        {
                            value: profileBackgroundColor,
                            onChange: ( profileBackgroundColor ) => setAttributes( { profileBackgroundColor } ),
                            label: __( 'Background Color' ),
                        },
                        {
                            value: profileTextColor,
                            onChange: ( profileTextColor ) => setAttributes( { profileTextColor } ),
                            label: __( 'Text Color' ),
                        },
                        {
                            value: profileLinkColor,
                            onChange: ( profileLinkColor ) => setAttributes( { profileLinkColor } ),
                            label: __( 'Social Link Color' ),
                        },

                    ] }
                >
                </PanelColorSettings>

                <PanelBody title={ __( 'Social Links', 'blockly' ) } initialOpen={ false } >
                    <p>
                        { __(
                            'Add links to your social media site and they will appear in the bottom of the profile box.',
                            'blockly'
                        ) }
                    </p>
                    <TextControl
                        label={ __( 'Facebook URL', 'blockly' ) }
                        type="url"
                        value={ facebook }
                        onChange={ ( value ) =>setAttributes( { facebook: value } ) }
                    />
                    
                     <TextControl
                        label={ __( 'Instagram URL', 'blockly' ) }
                        type="url"
                        value={ instagram }
                        onChange={ ( value ) =>setAttributes( { instagram: value } ) }
                    />

                    <TextControl
                        label={ __( 'Twitter URL', 'blockly' ) }
                        type="url"
                        value={ twitter }
                        onChange={ ( value ) =>setAttributes( { twitter: value } ) }
                    />
                    <TextControl
                        label={ __( 'Pinterest URL', 'blockly' ) }
                        type="url"
                        value={ pinterest }
                        onChange={ ( value ) =>setAttributes( { pinterest: value } ) }
                    />

                </PanelBody>


            </InspectorControls>
        )

    }
}