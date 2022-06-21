import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'

import Edit from './components/edit'
import Save from './components/save'

import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/table-section', {
	title: __( 'Table section', 'blockly' ),
	description: __(
		'Add a table section',
		'blockly'
	),
	icon: {
        src: 'dashicons-money-alt',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'table', 'blockly' ),
		__( 'tab', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		table_style: {
			type: 'string',
			default: 'normal' // normal | striped
		},
		column_names: {
			type: 'array',
			default: [
				'Column 1',
				'Column 2',
			]
		},
		rows: {
			type: 'array',
			default: [
				['Test 1', 'Test 2']
			]
		}
	},
	example: {
		attributes: {
			table_style: 'normal',
			column_names: [
				'Column 1',
				'Column 2',
			],
			rows: [
				['Test 1', 'Test 2']
			],
		}
	},
	edit: Edit,
	save: () => null
} );
