//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { InspectorControls, FontSizePicker, withFontSizes, withColors, ContrastChecker, PanelColorSettings,ColorPalette } from '@wordpress/block-editor';
import { withFallbackStyles, PanelBody, PanelRow, SelectControl, BaseControl,RangeControl } from '@wordpress/components';
//internal dependencies
import Padding from './../../../../utils/components/padding';
import { BLYblockFontSizePicker } from '../../../../utils/components/fontsize-picker';

// Apply fallback styles
const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const {
		textColor,
		backgroundColor,
		fontSize,
		customFontSize,
	} = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	const computedStyles = editableNode
		? getComputedStyle( editableNode )
		: null;
	return {
		fallbackBackgroundColor:
			backgroundColor || ! computedStyles
				? undefined
				: computedStyles.backgroundColor,
		fallbackTextColor:
			textColor || ! computedStyles ? undefined : computedStyles.color,
		fallbackFontSize:
			fontSize || customFontSize || ! computedStyles
				? undefined
				: parseInt( computedStyles.fontSize ) || undefined,
	};
} );

class Inspector extends Component {

	render() {

		const {
			attributes: {
				borderStyle,
				borderColor,
				borderWidth,
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft,
			},
			isSelected,
			setAttributes,
			fallbackFontSize,
			fontSize,
			setFontSize,
			backgroundColor,
			textColor,
			setBackgroundColor,
			setTextColor,
			fallbackBackgroundColor,
			fallbackTextColor,
		} = this.props;


		const borderStyles = [
			{ value: 'bly-list-border-none', label: __( 'None' ) },
			{ value: 'bly-list-border-solid', label: __( 'Solid' ) },
			{ value: 'bly-list-border-dotted', label: __( 'Dotted' ) },
			{ value: 'bly-list-border-dashed', label: __( 'Dashed' ) },
		];

		const onChangeBorderColor = ( value ) =>
			setAttributes( { borderColor: value } );

		return (
			<InspectorControls key="inspector">
				<PanelBody title={ __( 'Text Settings', 'blockly' ) }>

					<BLYblockFontSizePicker	{ ...this.props } />

					<SelectControl
						label={ __( 'List Border Style', 'blockly' ) }
						value={ borderStyle }
						options={ borderStyles.map( ( { value, label } ) => ( {value,label} ) ) }
						onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
					/>

					{ 'bly-list-border-none' !== borderStyle && (
						<RangeControl
							label={ __( 'List Border Width', 'blockly' ) }
							value={ borderWidth }
							onChange={ ( value ) => setAttributes( { borderWidth: value } ) }
							min={ 1 }
							max={ 5 }
							step={ 1 }
						/>
					) }

					{ 'bly-list-border-none' !== borderStyle && (
						<PanelRow>
							<BaseControl label={ __('List Border Color','blockly'	) } id={ 'bly-list-border-color-' + this.props.clientId } >
								<ColorPalette
									initialOpen={ false }
									value={ borderColor }
									onChange={ onChangeBorderColor }
								></ColorPalette>
							</BaseControl>
						</PanelRow>
					) }

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
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __( 'Text Color', 'blockly' ),
						},
					] }
				>
					<ContrastChecker
						{ ...{
							textColor: textColor.color,
							backgroundColor: backgroundColor.color,
							fallbackTextColor,
							fallbackBackgroundColor,
						} }
						fontSize={ fontSize.size }
					/>
				</PanelColorSettings>

			</InspectorControls>
		);
	}
}

export default compose( [
	applyFallbackStyles,
	withFontSizes( 'fontSize' ),
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Inspector );
