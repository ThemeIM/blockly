//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

import Edit from './components/edit'

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/blog-category', {
	title: __( 'Blog Category', 'blockly' ),
	description: __(
		'Add a Blog Category widget',
		'blockly'
	),
	icon: {
        src: 'welcome-write-blog',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'blog-category', 'blockly' ),
		__( 'widget', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		numberOfPosts: {
			type: 'number',
			default: 5
		},
		order: {
			type: 'string',
			default: 'desc'
		},
		orderBy: {
			type: 'string',
			default: 'date'
		},
		categories: {
			type: 'array',
			default: []
		}
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
