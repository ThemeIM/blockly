//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/recent-post', {
	title: __( 'Blog', 'blockly' ),
	description: __(
		'Add a recent blog widget',
		'blockly'
	),
	icon: {
        src: 'welcome-write-blog',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'recent-blog', 'blockly' ),
		__( 'widget', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		numberOfPosts: {
			type: 'number',
			default: 9
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
		}
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
