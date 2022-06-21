import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/header-section", {
		title: __( 'Header section', 'blockly' ),
		description: __( 'A simple block for header section', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'header', 'blockly' ),
			__( 'notice', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			subtitle: {
				type: 'string',
				default: ''
			},
			title: {
				type: 'string',
				default: ''
			},
			subtitle_2: {
				type: 'string',
				default: ''
			},
			subtitle_3: {
				type: 'string',
				default: ''
			},
			customer_text: {
				type: 'string',
				default: ''
			}
		},
		example: {
			attributes: {
				subtitle: '',
				title: '',
				subtitle_2: '',
				subtitle_3: '',
				customer_text: ''
			},
		},
        edit: Edit,
        save: () => null
	},
);
