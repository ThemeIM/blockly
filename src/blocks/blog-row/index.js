import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';
import Save from './components/save';

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/blog-row', {
	title: __( 'Blog Section', 'blockly' ),
	description: __(
		'Add a blog section.',
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
		__( 'section', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		title: {
			type: 'string',
			default: ''
		},
		subtitle: {
			type: 'string',
			default: ''
		},
		num_of_posts: {
			type: 'number',
			default: 0
		},
	},
	example: {
		attributes: {
			title: __(''),
			subtitle: __(''),
			num_of_posts: 0
		},
	},
	edit: Edit,
	save: () => null
} );
