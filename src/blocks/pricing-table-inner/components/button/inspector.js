//Inspector Controls Font size, color, background color
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { InspectorControls,FontSizePicker,withFontSizes,withColors,ContrastChecker,PanelColorSettings } from '@wordpress/blockEditor';
import { withFallbackStyles,PanelBody,ToggleControl,TextControl,RangeControl } from '@wordpress/components';
//internal dependencies
import ButtonSettings from './../../../../utils/inspector/button';
import Padding from './../../../../utils/components/padding';

// Apply fallback styles
const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { backgroundColor } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	const computedStyles = editableNode
		? getComputedStyle( editableNode )
		: null;
	return {
		fallbackBackgroundColor:
			backgroundColor || ! computedStyles
				? undefined
				: computedStyles.backgroundColor,
	};
} );


class Inspector extends Component {
	
	render() {
		const {
			attributes: {
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft,
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
				buttonTarget,
			},
			isSelected,
			setAttributes,
			backgroundColor,
			setBackgroundColor,
			fallbackBackgroundColor,
		} = this.props;

		return (
		
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Button Settings', 'blockly' ) }>
					<ButtonSettings
						// Open in new window
						buttonTarget={ buttonTarget }
						onChangeButtonTarget={ ( value ) =>
							setAttributes( { buttonTarget: ! buttonTarget } )
						}
						// Button Size
						buttonSize={ buttonSize }
						onChangeButtonSize={ ( buttonSize ) =>
							setAttributes( { buttonSize } )
						}
						// Button Shape
						buttonShape={ buttonShape }
						onChangeButtonShape={ ( buttonShape ) =>
							setAttributes( { buttonShape } )
						}
						// Button color
						buttonBackgroundColor={ buttonBackgroundColor }
						onChangeButtonColor={ ( buttonBackgroundColor ) =>
							setAttributes( { buttonBackgroundColor } )
						}
						// Button text color
						buttonTextColor={ buttonTextColor }
						onChangeButtonTextColor={ ( buttonTextColor ) =>
							setAttributes( { buttonTextColor } )
						}
					/>
				</PanelBody>

				<PanelBody title={ __( 'Padding Settings', 'blockly' ) } initialOpen={ false } >
					<Padding
						// Top padding
						paddingEnableTop={ true }
						paddingTop={ paddingTop }
						paddingTopMin="0"
						paddingTopMax="100"
						onChangePaddingTop={ ( paddingTop ) =>
							setAttributes( { paddingTop } )
						}
						// Right padding
						paddingEnableRight={ true }
						paddingRight={ paddingRight }
						paddingRightMin="0"
						paddingRightMax="100"
						onChangePaddingRight={ ( paddingRight ) =>
							setAttributes( { paddingRight } )
						}
						// Bottom padding
						paddingEnableBottom={ true }
						paddingBottom={ paddingBottom }
						paddingBottomMin="0"
						paddingBottomMax="100"
						onChangePaddingBottom={ ( paddingBottom ) =>
							setAttributes( { paddingBottom } )
						}
						// Left padding
						paddingEnableLeft={ true }
						paddingLeft={ paddingLeft }
						paddingLeftMin="0"
						paddingLeftMax="100"
						onChangePaddingLeft={ ( paddingLeft ) =>
							setAttributes( { paddingLeft } )
						}
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
	applyFallbackStyles,
	withFontSizes( 'fontSize' ),
	withColors( 'backgroundColor' ),
] )( Inspector );
