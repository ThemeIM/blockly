/**
 * BLOCK: Pricing Table - Features Component
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { RichText, getFontSizeClass,FontSizePicker,withFontSizes,getColorClassName } from '@wordpress/block-editor';
//internal dependencie
import classnames from 'classnames';
//external dependencie
import Edit from './edit';

//register the block
registerBlockType( 'blockly/pricing-table-features', {
	title: __( 'Product Features', 'blockly' ),
	description: __(
		'Adds a product feature component with schema markup.',
		'blockly'
	),
	icon: 'cart',
	category: 'blockly',
	parent: [ 'blockly/pricing-table' ],
	keywords: [
		__( 'pricing table', 'blockly' ),
		__( 'features', 'blockly' ),
		__( 'shop', 'blockly' ),
	],

	attributes: {
		features: {
			type: 'string',
			source: 'html',
			selector: 'ol,ul',
			multiline: 'li',
			default:'<li>abc</li>',
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
		borderStyle: {
			type: 'string',
			default: 'bly-list-border-none',
		},
		borderColor: {
			type: 'string',
		},
		borderWidth: {
			type: 'number',
			default: 1,
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
			features,
			fontSize,
			customFontSize,
			backgroundColor,
			textColor,
			customBackgroundColor,
			customTextColor,
			borderStyle,
			borderColor,
			borderWidth,
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
			'bly-pricing-table-features': true,
			[ fontSizeClass ]: fontSizeClass,
			[ textClass ]: textClass,
			[ backgroundClass ]: backgroundClass,
			[ borderStyle ]: borderStyle,
			[ 'bly-list-border-width-' + borderWidth ]: borderWidth,
		} );

		const styles = {
			fontSize: fontSizeClass ? undefined : customFontSize,
			backgroundColor: backgroundClass
				? undefined
				: customBackgroundColor,
			color: textClass ? undefined : customTextColor,
			borderColor: borderColor ? borderColor : undefined,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
		};

		return (
			<RichText.Content
				tagName="ul"
				itemProp="description"
				value={ features }
				className={ className ? className : undefined }
				style={ styles }
			/>
		);
	},
} );
