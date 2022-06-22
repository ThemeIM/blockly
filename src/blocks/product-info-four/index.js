import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/product-info-four", {
		title: __( 'Product Info Three', 'blockly'  ),
		description: __( 'Product info block - 4', 'blockly' ),
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
			info_items: {
				type: 'array',
				default: [
					{
						icon: '',
						text: '',
					}
				]
			}
		},
		example: {
			attributes: {
				main_title: __('Considerable Notice'),
				main_description: __('To begin the customization, one of our skilled project managers with...'),
				secondary_title: __('Explanation of Service'),
				secondary_description: __('To begin the customization, one of our skilled project managers with...'),
				info_items: [
					{
						icon: '',
						text: '',
					}
				],
			},
		},
        edit: Edit,
        save: () => null
	},
);
