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
registerBlockType( 'blockly/single-post-meta', {
	title: __( 'Post Meta', 'blockly' ),
	description: __(
		'Add Post Meta.',
		'blockly'
	),
	icon: {
        src: 'nametag',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'blog', 'blockly' ),
		__( 'single', 'blockly' ),
		__( 'post', 'blockly' ),
		__( 'meta', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		showAuthor: {
			type: 'boolean',
			default: 'true'
		},
		swhowpostDate: {
			type: 'boolean',
			default: 'true'
		},
		showpostCat: {
			type: 'boolean',
			default: 'true'
		},
		swhoReadingTime: {
			type: 'boolean',
			default: 'true'
		}
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
