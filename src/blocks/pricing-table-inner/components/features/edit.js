//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { RichText, withFontSizes, withColors } from '@wordpress/block-editor';
//internal dependencies
import Inspector from './inspector';
import { computeFontSize } from '../../../../utils/helper';
//external dependencies
import classnames from 'classnames';

class Edit extends Component {

	render() {

		const {
			attributes: {
				features,
				borderStyle,
				borderColor,
				borderWidth,
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft,
			},
			isSelected,
			className,
			setAttributes,
			fallbackFontSize,
			fontSize,
			backgroundColor,
			textColor,
		} = this.props;

		// Setup class names
		const editClassName = classnames( {
			'bly-pricing-table-features': true,
			[ fontSize.class ]: fontSize.class,
			'has-text-color': textColor.color,
			'has-background': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
			[ borderStyle ]: borderStyle,
			[ 'bly-list-border-width-' + borderWidth ]: borderWidth,
		} );

		// Setup styles
		const editStyles = {
			fontSize: computeFontSize( fontSize ) ?? undefined,
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			borderColor: borderColor ? borderColor : undefined,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
		};

		return [
			<Fragment key={ 'bly-pricing-table-inner-component-description-' + this.props.clientId }>
				<Inspector { ...this.props } />
				<RichText
					tagName="ul"
					multiline="li"
					itemProp="description"
					placeholder={ __('Add a product feature','blockly') }
					keepPlaceholderOnFocus
					value={ features }
					onChange={ ( value ) =>	setAttributes( { features: value } ) }
					style={ editStyles }
					className={ editClassName ? editClassName : undefined }
				/>
			</Fragment>,
		];
	}
}

export default compose( [
	withFontSizes( 'fontSize' ),
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
