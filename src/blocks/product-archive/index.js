/**
 * BLOCK: Testimonial
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';
import save from './components/save';
import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/product-archive', {
	title: __( 'Product Archive', 'blockly' ),
	description: __(
		'Single Prodcut Archive Content',
		'blockly'
	),
	icon: {
        src: 'columns',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'product', 'blockly' ),
		__( 'archive', 'blockly' ),
		__( 'query', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		page_image: {
			type: 'string',
			default: ''
		},
		page_title: {
			type: 'string',
			default: ''
		},
		page_subtitle: {
			type: 'string',
			default: ''
		},
		background_image: {
			type: 'string',
			default: ''
		},
		background_color: {
			type: 'string',
			default: ''
		},
		show_media: {
			type: 'boolean',
		    default: true
		},
		selected_categories: {
			type: 'array',
			default: []
		},
		more_categories: {
			type: 'array',
			default: []
		},
	},
	supports: {
		color: {
			background: true,
			gradients: true
		},
		spacing: {
			padding: true,
			margin: true
		}
	},

	edit: Edit,
	save: props => {
		return null;
	}
} );
