/**
 * BLOCK: Highlight
 */

//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
// internal dependencies
import Edit from './components/edit';
import Save from './components/save';
import './styles/editor.scss';
import './styles/style.scss';

// Register the block
registerBlockType( 'blockly/highlight', {
    title: __( 'Highlight', 'blockly' ),
	description: __( 'Draw attention and emphasize important narrative.', 'blockly' ),
	icon: {
        src: 'edit',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'text', 'blockly' ),
		__( 'paragraph', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],

    example: {
		attributes: {
			content: __( 'Add a highlight effect to paragraph text in order to grab attention and emphasize important narrative.', 'blockly' ),
		},
	},
    
    attributes: {
		content: {
			type: "string",
			source: "html",
			selector: "mark"
		},
		align: {
			type: "string"
		},
		backgroundColor: {
			type: "string"
		},
		customBackgroundColor: {
			type: "string",
			default:'#e4d1d1'
		},
		textColor: {
			type: "string"
		},
		customTextColor: {
			type: "string"
		},
		fontSize: {
			type: "string"
		},
		customFontSize: {
			type: "number"
		}
	},
	
	edit: ( props ) => {
		return <Edit { ...props } />;
	},

	save: ( props ) => {
		return <Save { ...props } />;
	},
} );
