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
registerBlockType( 'blockly/subscription-forms', {
	title: __( 'Subscription Forms', 'blockly' ),
	description: __(
		'Add a Subscription Forms.',
		'blockly'
	),
	icon: {
        src: 'forms',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'subscription', 'blockly' ),
		__( 'forms', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'mailchimp', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
		actionUrl: {
			type: 'string',
			default: ''
		},
		members: {
			type: 'string',
			default: '1500'
		},
		customers: {
			type: 'string',
			default: '4000'
		},
		downloades: {
			type: 'string',
			default: '25060'
		}
	},
	edit: Edit,
	save: props => {
		return null;
	}
} );
