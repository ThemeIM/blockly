import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';
import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/product-info-five", {
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
			title: {
				type: 'string',
				default: ''
			},
			description: {
				type: 'string',
				default: ''
			},
			image: {
				type: 'string',
				default: ''
			}
		},
		example: {
			attributes: {
				title: __('Considerable Notice'),
				description: __('To begin the customization, one of our skilled project managers with...'),
				info_items: [
					__('To begin the customization, one skilled project managers provide you with a list of similarly designed themes.'),
					__('To begin the customization, one skilled project managers provide you with a list of similarly designed themes.'),
				],
				image: ''
			},
		},
        edit: Edit,
        save: () => null
	},
);
