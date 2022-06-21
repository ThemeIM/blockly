/**
 * BLOCK: Quote
 */

// wordpress dependencies
import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';
import Save from './components/save';
import './styles/style.scss';
import './styles/editor.scss';

//register block quote
registerBlockType ( "blockly/quote", {
		title: __( 'Quote Box', 'blockly'  ),
		description: __( 'A simple block for Quote', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'editor-quote',
			background: '#cce5ff',
			foreground: '#004085',
		},
		keywords: [
			__( 'quote', 'blockly' ),
			__( 'quote box', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		example: {
			attributes: {
				content: __( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea sequat, vel illum dolore eu feugiat nulla facili.', 'blockly' ),
				name:__('Russell Hawlader','blockly')
			},
		},
		attributes: {
			style_type: {
				type: 'string',
				default: 'style_one'
			},
			content: {
				type: 'string',
				default: __('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea sequat, vel illum dolore eu feugiat nulla facili','blockly')
			},
			name: {
				type: 'string',
				default: __('Russell Hawlader','blockly')
			},
			name_show_hide: {
				type: 'Boolean',
				default: true
			},
			backgroundColor: {
				type: 'string',
			},
			customBackgroundColor: {
				type: 'string',
			},
			textColor: {
				type: 'string',
			},
			customTextColor: {
				type: 'string',
			},
			iconColor:{
				type: 'string',
			},
			customIconColor:{
				type: 'string',
				default: '#dddddd'
			},
			fontSize: {
				type: "string"
			},
			customFontSize: {
				type: "number",
				default: 16
			},
			borderRadius: {
				type: 'number',
				default: 0,
			},
			padding: {
				type: 'number',
				default:0,
			},
			align: {
				type: "string"
			}
		},

        edit: props => {
			return <Edit { ...props } />
        },

        save: props => {
			return <Save { ...props } />
		}
	},
);
