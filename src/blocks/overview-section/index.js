//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

import Edit from './components/edit'
import Save from './components/save'

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/overview-section', {
	title: __( 'Overview section', 'blockly' ),
	description: __(
		'Add an Overview section',
		'blockly'
	),
	icon: {
        src: 'welcome-write-blog',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'overview', 'blockly' ),
		__( 'widget', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		title: {
			type: 'string',
			default: 'This is awesome!'
		},
		subtitle: {
			type: 'string',
			default: 'This is quite awesome'
		},
		image: {
			type: 'string',
			default: ''
		}
	},
	example: {
		attributes: {
			title: __('Something awesome is about to happen!'),
			subtitle: __('Ensure to follow requirements when developing solutions what the you must be muted on this journey.')
		}
	},
	edit: Edit,
	save: Save
} );
