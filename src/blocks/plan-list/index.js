//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

import Edit from './components/edit'
import Save from './components/save'

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/plan-list', {
	title: __( 'Plan list section', 'blockly' ),
	description: __(
		'Add a plan list section',
		'blockly'
	),
	icon: {
        src: 'dashicons-money-alt',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'plan', 'blockly' ),
		__( 'list', 'blockly' ),
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
			default: [
				''
			]
		}
	},
	example: {
		attributes: {
			title: __('UNMANAGED DEDICATED HOSTING PLANS –'),
			plans: [
				__('Test plan')
			]
		}
	},
	edit: Edit,
	save: Save
} );
