/**
 * BLOCK: Header
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';
import Save from './components/save';
import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/site-header', {
	title: __( 'Site header', 'blockly' ),
	description: __(
		'Add a side header',
		'blockly'
	),
	icon: {
        src: 'admin-links',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'header', 'blockly' ),
		__( 'nav', 'blockly' ),
		__( 'menu', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	attributes: {
        pages: {
            type: 'array',
            default: [
				{icon:'lab la-wordpress', link:'wordpress.org', title: 'Wordpress theme'},
			]
        },
        products: {
            type: 'array',
            default: [
				{link:'', title: 'Wordpress themes'},
			]
        },
        freeItems: {
            type: 'string',
            default: ''
        },
        pricePlan: {
            type: 'string',
            default: ''
        },
		hire: {
			type: 'string',
			default: ''
		},
        login: {
			type: 'string',
			default: ''
		},
		logo: {
			type: 'string',
			default: ''
		},
		productDropdownIcon: {
			type: 'string',
			default: ''
		},
		cartIcon: {
			type: 'string',
			default: ''
		}
	},
	edit: Edit,
	save: Save,
} );
