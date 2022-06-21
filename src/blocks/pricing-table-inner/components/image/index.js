// wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import {getColorClassName } from '@wordpress/block-editor';
//internal dependencies
import './styles/style.scss';
import './styles/editor.scss';
import Edit from './edit';
//external dependencies
import classnames from 'classnames';

// Register the block
registerBlockType( 'blockly/pricing-table-image', {
	title: __( 'Product Image', 'blockly' ),
	description: __('Adds a product image component with schema markup.','blockly'),
	icon: 'cart',
	category: 'blockly',
	parent: [ 'blockly/pricing-table-inner' ],
	keywords: [
		__( 'pricing table', 'blockly' ),
		__( 'title', 'blockly' ),
		__( 'shop', 'blockly' ),
	],

	attributes: {
        pricingImgURL: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: 'img',
        },
        pricingImgAlt: {
            type: 'string',
            source: 'attribute',
            selector: 'figure img',
            attribute: 'alt',
            default: '',
        },
        pricingImgID: {
            type: 'number',
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
        backgroundColor: {
			type: 'string',
		},
		customBackgroundColor: {
			type: 'string',
		},
	},

	edit: ( props ) => {
        return <Edit {...props } />;
    },

	save: ( props ) => {

		const {
			pricingImgURL,
            pricingImgID,
            pricingImgAlt,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
		} = props.attributes;
		

		const styles = {
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
			
		};

		const className = classnames('pricing-table-top-image');

		return (
			<h1>image save</h1>
		);
		
	},
} );
