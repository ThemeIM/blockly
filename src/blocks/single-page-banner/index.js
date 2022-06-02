/**
 * BLOCK: Testimonial
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';
// import save from './components/save';
import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/search', {
	title: __( 'Search Forms', 'blockly' ),
	description: __(
		'Add a Search Forms.',
		'blockly'
	),
	icon: {
        src: 'search',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'search', 'blockly' ),
		__( 'forms', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		searchStyle: {
			type: 'string',
			default: '1'
		},
		backgroudImage: {
			type: 'string',
			default: ''
		},
		iconImage: {
			type: 'string',
			default: ''
		},
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
