//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

import Edit from './components/edit'
import Save from './components/save'

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/tip', {
	title: __( 'Tip section', 'blockly' ),
	description: __(
		'Add a Tip section',
		'blockly'
	),
	icon: {
        src: 'dashicons-money-alt',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'tip', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		title: {
			type: 'string',
			default: 'Price plan'
		},
		tip: {
			type: 'string',
			default: 'Lorem ipsum dolores sit'
		},
	},
	example: {
		attributes: {
			title: __('Price plan'),
			tip: __('Lorem ipsum dolores sit')
		}
	},
	edit: Edit,
	save: Save
} );
