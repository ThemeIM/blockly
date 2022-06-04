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
registerBlockType( 'blockly/themeim-loop-query', {
	title: __( 'Loop Query', 'blockly' ),
	description: __(
		'Add a Themeim Loop Query.',
		'blockly'
	),
	icon: {
        src: 'admin-links',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'loop', 'blockly' ),
		__( 'query', 'blockly' ),
		__( 'themeim', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		list: {
			type: 'array',
			default: [
				{link:'hello.com', title: 'hello', icon:''},
				{link:'hello.com', title: 'hello', icon:''}
			]
		},
		sectionTitle: {
			type: 'string',
			default: ''
		}
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
