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
registerBlockType( 'blockly/social-list', {
	title: __( 'Social List', 'blockly' ),
	description: __(
		'Add a social List.',
		'blockly'
	),
	icon: {
        src: 'networking',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'social', 'blockly' ),
		__( 'list', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'menu', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		list: {
			type: 'array',
			default: [
				{link:'https://facebook.com', title: 'facebook', icon:'fab fa-facebook-f'},
				{link:'https://twitter.com', title: 'twitter', icon:'fab fa-twitter'}
			]
		}
	},
	edit: Edit,
	save,
} );
