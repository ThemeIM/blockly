/**
 * BLOCK: Pricing Table - title Component
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { RichText,getFontSizeClass,FontSizePicker,withFontSizes,getColorClassName } from '@wordpress/block-editor';
//internal dependencie
import Edit from './edit';
//external dependencie
import classnames from 'classnames';

// Register the block
registerBlockType( 'blockly/pricing-table-title', {
	title: __( 'Product Title', 'blockly' ),
	description: __('Adds a product title component with schema markup.','blockly'),
	icon: 'cart',
	category: 'blockly',
	parent: [ 'blockly/pricing-table-inner' ],
	keywords: [
		__( 'pricing table', 'blockly' ),
		__( 'title', 'blockly' ),
		__( 'shop', 'blockly' ),
	],

	attributes: {
		title: {
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
			default:'#fff'
		},
		paddingTop: {
			type: 'number',
			default: 0,
		},
		paddingRight: {
			type: 'number',
			default: 0,
		},
		paddingBottom: {
			type: 'number',
			default: 0,
		},
		paddingLeft: {
			type: 'number',
			default: 0,
		},
	},

	edit: ( props ) => {
        return <Edit {...props } />;
    },

	save: ( props ) => {

		const {
			title,
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
		const backgroundClass = getColorClassName(
			'background-color',
			backgroundColor
		);

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

		const className = classnames( {
			'has-background': backgroundColor || customBackgroundColor,
			'bly-pricing-table-title': true,
			[ textClass ]: textClass,
			[ backgroundClass ]: backgroundClass,
			[ fontSizeClass ]: fontSizeClass,
		} );

		return (
			<RichText.Content
				tagName="div"
				itemProp="name"
				value={ title }
				style={ styles }
				className={ className ? className : undefined }
			/>
		);
		
	},
} );
