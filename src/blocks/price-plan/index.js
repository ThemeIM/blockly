//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

import Edit from './components/edit'
import Save from './components/save'

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/price-plan', {
	title: __( 'Price plan section', 'blockly' ),
	description: __(
		'Add a price plan section',
		'blockly'
	),
	icon: {
        src: 'dashicons-money-alt',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'price', 'blockly' ),
		__( 'price-plan', 'blockly' ),
		__( 'widget', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		title: {
			type: 'string',
			default: 'Price plan'
		},
		plans: {
			type: 'array',
			default: []
		}
	},
	example: {
		attributes: {
			title: __('Price plan'),
			plans: [
				{
					type: 'Elite',
					details: '1 Month Access to This Products',
					price: 49,
					duration: '3 month',
					cta_text: 'GO PRO',
					cta_url: '/go-pro',
					features: [
						'03 WordPress Theme',
						'02 Code Script',
						'10 HTML + UI Assets'
					]
				}
			]
		}
	},
	edit: Edit,
	save: Save
} );
