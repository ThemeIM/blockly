/**
 * BLOCK: Testimonial
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';
import save from './components/save';
import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/section', {
	title: __( 'Section', 'blockly' ),
	description: __(
		'Add a Section.',
		'blockly'
	),
	icon: {
        src: 'columns',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'section', 'blockly' ),
		__( 'columns', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		background_image: {
			type: 'string',
			default: ''
		},
		background_color: {
			type: 'string',
			default: ''
		},
		show_media: {
			type: 'boolean',
		    default: true
		}
		
	},
	supports: {
		color: {
			background: true,
			gradients: true
		},
		spacing: {
			padding: true,
			margin: true
		}
	},

	edit: Edit,
	save,
} );
