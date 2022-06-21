/**
 * BLOCK: Pricing Table - Subtitle2 Component
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {RichText,getFontSizeClass,FontSizePicker,withFontSizes,getColorClassName } from '@wordpress/block-editor';
//internal dependencie
import Edit from './edit';
//external dependencie
import classnames from 'classnames';

// Register the block
registerBlockType( 'blockly/pricing-table-subtitle2', {
	title: __( 'Product Subtitle', 'blockly' ),
	description: __('Adds a product subtitle component with schema markup.','blockly'),
	icon: 'cart',
	category: 'blockly',
	parent: [ 'blockly/pricing-table-inner' ],
	keywords: [
		__( 'pricing table', 'blockly' ),
		__( 'subtitle', 'blockly' ),
		__( 'shop', 'blockly' ),
	],

	attributes: {
		subtitle: {
			type: 'string',
		},
		fontSize: {
			type: 'string',
		},
		customFontSize: {
			type: 'number',
		},
		textColor: {
			type: 'string',
		},
		customTextColor: {
			type: 'string',
		},
		backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
		paddingTop: {
			type: 'number',
			default: 10,
		},
		paddingRight: {
			type: 'number',
			default: 20,
		},
		paddingBottom: {
			type: 'number',
			default: 10,
		},
		paddingLeft: {
			type: 'number',
			default: 20,
		},
	},

	edit: Edit,

	save: ( props ) => {

		const {
			subtitle,
			fontSize,
			customFontSize,
			backgroundColor,
			textColor,
			customBackgroundColor,
			customTextColor,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
		} = props.attributes;

		const fontSizeClass = getFontSizeClass( fontSize );
		const textClass = getColorClassName( 'color', textColor );
		const backgroundClass = getColorClassName('background-color',backgroundColor);
	
		const className = classnames( {
			'has-background': backgroundColor || customBackgroundColor,
			'bly-pricing-table-subtitle2': true,
			[ textClass ]: textClass,
			[ backgroundClass ]: backgroundClass,
			[fontSizeClass]: fontSizeClass,
		} );

		// Setup styles
		const styles = {
			backgroundColor: backgroundClass
				? undefined
				: customBackgroundColor,
			color: textClass ? undefined : customTextColor,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
			fontSize: fontSizeClass ? undefined : customFontSize,
		};

		return (
			<RichText.Content
				tagName="div"
				value={ subtitle }
				className={ className ? className : undefined }
				style={ styles }
			/>
		);
	},
} );
