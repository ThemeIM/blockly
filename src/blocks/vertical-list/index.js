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
registerBlockType( 'blockly/vertical-list', {
	title: __( 'Vertical List', 'blockly' ),
	description: __(
		'Add a Vertical List.',
		'blockly'
	),
	icon: {
        src: 'list',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'vertical', 'blockly' ),
		__( 'list', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'menu', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		list: {
			type: 'array',
			default: [
				{link:'hello.com', title: 'hello', icon:''},
				{link:'hello.com', title: 'hello', icon:''}
			]
		},
	},
	// supports: {
	// 	color: {
	// 		background: true,
	// 		gradients: true
	// 	},
	// 	spacing: {
	// 		padding: true,
	// 		margin: true
	// 	}
	// },

	edit: Edit,
	save,
} );
