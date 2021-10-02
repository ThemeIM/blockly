//Inspector Controls Font size, color, background color
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { InspectorControls, FontSizePicker, withFontSizes, withColors, ContrastChecker, PanelColorSettings, RangeControl } from '@wordpress/block-editor';
import { withFallbackStyles, PanelBody } from '@wordpress/components';
//internal dependencies
import Padding from './../../../../utils/components/padding';

class Inspector extends Component {

	render() {
	
		const {
			attributes: { paddingTop,paddingRight,paddingBottom,paddingLeft },
			setAttributes,
			backgroundColor,
			setBackgroundColor,

		} = this.props;

		return (
			<InspectorControls key="inspector">

				<PanelBody title={ __( 'Padding Settings', 'blockly' ) } initialOpen={ false } >
					<Padding

						// Top padding
						paddingEnableTop={ true }
						paddingTop={ paddingTop }
						paddingTopMin="0"
						paddingTopMax="100"
						onChangePaddingTop={ ( paddingTop ) => setAttributes( { paddingTop } )}

						// Right padding
						paddingEnableRight={ true }
						paddingRight={ paddingRight }
						paddingRightMin="0"
						paddingRightMax="100"
						onChangePaddingRight={ ( paddingRight ) =>setAttributes( { paddingRight } )	}

						// Bottom padding
						paddingEnableBottom={ true }
						paddingBottom={ paddingBottom }
						paddingBottomMin="0"
						paddingBottomMax="100"
						onChangePaddingBottom={ ( paddingBottom ) => setAttributes( { paddingBottom } ) }

						// Left padding
						paddingEnableLeft={ true }
						paddingLeft={ paddingLeft }
						paddingLeftMin="0"
						paddingLeftMax="100"
						onChangePaddingLeft={ ( paddingLeft ) => setAttributes( { paddingLeft } ) }
					/>

				</PanelBody>

				<PanelColorSettings
					title={ __( 'Color Settings', 'blockly' ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Background Color', 'blockly' ),
						},
						
					] }
				>
				</PanelColorSettings>
			
			</InspectorControls>
		);
	}
}

export default compose( [
	withColors( 'backgroundColor', ),
] )( Inspector );
