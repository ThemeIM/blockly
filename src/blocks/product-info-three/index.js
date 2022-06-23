import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/product-info-three", {
		title: __( 'Product Info Three', 'blockly'  ),
		description: __( 'Product info block - 3', 'blockly' ),
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
			title: {
				type: 'string',
				default: ''
			},
			description: {
				type: 'string',
				default: ''
			},
			info_items: {
				type: 'array',
				default: [
					{
						icon: '',
						title: '',
						description: ''
					}
				]
			}
		},
		example: {
			attributes: {
				title: __('Considerable Notice'),
				description: __('To begin the customization, one of our skilled project managers with...'),
				info_items: [
					{
						icon: '',
						title: '',
						description: ''
					}
				]
			},
		},
        edit: Edit,
        save: () => null
	},
);
