import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/product-info-two", {
		title: __( 'Product Info Two', 'blockly'  ),
		description: __( 'Product info block - 2', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'product', 'blockly' ),
			__( 'info', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			main_title: {
				type: 'string',
				default: ''
			},
			main_description: {
				type: 'string',
				default: ''
			},
			secondary_title: {
				type: 'string',
				default: ''
			},
			secondary_description: {
				type: 'string',
				default: ''
			},
			button_title: {
				type: 'string',
				default: ''
			},
			button_link: {
				type: 'string',
				default: ''
			},
		},
		example: {
			attributes: {
				main_title: __('Considerable Notice'),
				main_description: __('To begin the customization, one of our skilled project managers with...'),
				secondary_title: __('Replace a Heading Here'),
				secondary_description: __('To begin the customization, one of our skilled project managers will provide...'),
				button_title: __('Replace a Heading Here'),
				button_link: __('To begin the customization, one of our skilled project managers will provide...'),
			},
		},
        edit: Edit,
        save: () => null
	},
);
