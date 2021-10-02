/**
 * BLOCK: Pricing Table - Button Component
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { RichText,getFontSizeClass,FontSizePicker,withFontSizes,getColorClassName } from '@wordpress/block-editor';
//external dependencies
import Edit from './edit';
import CustomButton from '../../../button/components/button';
//internal dependencie
import classnames from 'classnames';

// Register the block
registerBlockType( 'blockly/pricing-table-button', {
	title: __( 'Product Button', 'blockly' ),
	description: __( 'Adds a product button component.', 'blockly' ),
	icon: 'cart',
	category: 'blockly',
	parent: [ 'blockly/pricing-table' ],
	keywords: [
		__( 'pricing table', 'blockly' ),
		__( 'subtitle', 'blockly' ),
		__( 'shop', 'blockly' ),
	],

	attributes: {
		buttonText: {
			type: 'string',
		},
		buttonUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		buttonAlignment: {
			type: 'string',
		},
		buttonBackgroundColor: {
			type: 'string',
			default: '#3373dc',
		},
		buttonTextColor: {
			type: 'string',
			default: '#ffffff',
		},
		buttonSize: {
			type: 'string',
			default: 'bly-button-size-medium',
		},
		buttonShape: {
			type: 'string',
			default: 'bly-button-shape-square',
		},
		buttonTarget: {
			type: 'boolean',
			default: false,
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

	save: ( props )=> {
		
		const {
			backgroundColor,
			customBackgroundColor,
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
		} = props.attributes;

		const backgroundClass = getColorClassName(
			'background-color',
			backgroundColor
		);

		const className = classnames( {
			'has-background': backgroundColor || customBackgroundColor,
			'bly-pricing-table-button': true,
			[ backgroundClass ]: backgroundClass,
		} );

		const styles = {
			backgroundColor: backgroundClass
				? undefined
				: customBackgroundColor,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
		};

		return (
			<div
				className={ className ? className : undefined }
				style={ styles }
			>
				<CustomButton { ...props }>
					{ buttonText && (
						<a
							href={ buttonUrl }
							target={ buttonTarget ? '_blank' : null }
							rel={ buttonTarget ? 'noopener noreferrer' : null }
							className={ classnames('bly-button',buttonShape,buttonSize ) }
							style={ { color: buttonTextColor,backgroundColor: buttonBackgroundColor } }
						>
							<RichText.Content value={ buttonText } />
						</a>
					) }
				</CustomButton>
			</div>
		);
	
	},
} );
