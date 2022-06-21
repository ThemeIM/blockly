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
<<<<<<<< HEAD:src/blocks/blog-lastest-news/index.js
registerBlockType( 'blockly/blog-latest-news', {
	title: __( 'Blog Latest News', 'blockly' ),
========
registerBlockType( 'blockly/blog-row', {
	title: __( 'Blog Section', 'blockly' ),
>>>>>>>> master:src/blocks/blog-row/index.js
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
		__( 'Latest', 'blockly' ),
		__( 'News', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		numberOfPosts: {
			type: 'number',
			default: 3
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
			items:{
				type: 'object'
			} 
		},
		title: {
			type: 'string',
			default: 'Default title'
		},
		subtitle: {
			type: 'string',
			default: 'Default subtitle'
		},
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
