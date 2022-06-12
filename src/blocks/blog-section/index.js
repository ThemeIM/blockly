import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/blog-section', {
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
		posts: {
			type: 'string',
			default: []
		}
	},
	example: {
		attributes: {
			title: __(''),
			subtitle: __(''),
			posts: [
				''
			],
		},
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
