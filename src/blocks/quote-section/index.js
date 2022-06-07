//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

import Edit from './components/edit'
import Save from './components/save'

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/quote-section', {
	title: __( 'Quote section section', 'blockly' ),
	description: __(
		'Add a Quote section',
		'blockly'
	),
	icon: {
        src: 'dashicons-money-alt',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'quote', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		quote: {
			type: 'string',
			default: ''
		},
		cite: {
			type: 'string',
			default: ''
		},
	},
	example: {
		attributes: {
			quote: __('Price plan'),
			cite: __('Lorem ipsum dolores sit')
		}
	},
	edit: Edit,
	save: Save
} );
