import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';
import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/product-info-six", {
		title: __( 'Product Info Five', 'blockly'  ),
		description: __( 'Product info block - 5', 'blockly' ),
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
			secondary_title_1: {
				type: 'string',
				default: ''
			},
			secondary_description_1: {
				type: 'string',
				default: ''
			},
			secondary_title_2: {
				type: 'string',
				default: ''
			},
			secondary_description_2: {
				type: 'string',
				default: ''
			},
		},
		example: {
			attributes: {
				main_title: __('Considerable Notice'),
				main_description: __('To begin the customization, one of our skilled project managers with...'),
				secondary_title_1: __('Explanation of Service'),
				secondary_description_1: __('To begin the customization, one of our skilled project managers with...'),
				secondary_title_2: __('Explanation of Service'),
				secondary_description_2: __('To begin the customization, one of our skilled project managers with...'),
			},
		},
        edit: Edit,
        save: () => null
	},
);
