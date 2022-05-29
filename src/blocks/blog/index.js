/**
 * BLOCK: Testimonial
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';


import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/blog', {
	title: __( 'Blog', 'blockly' ),
	description: __(
		'Add a blog.',
		'blockly'
	),
	icon: {
        src: 'welcome-write-blog',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'blog', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
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
	save: props => {
		return null;
	}
} );
