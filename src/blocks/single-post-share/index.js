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
registerBlockType( 'blockly/single-post-share', {
	title: __( 'Post Share', 'blockly' ),
	description: __(
		'Add single Post share.',
		'blockly'
	),
	icon: {
        src: 'share',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'blog', 'blockly' ),
		__( 'single', 'blockly' ),
		__( 'share', 'blockly' ),
		__( 'post', 'blockly' ),
		__( 'social', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	edit: Edit,
	save: props => {
		return null;
	}
} );
