import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/terms-and-Conditions", {
		title: __( 'Terms and Conditions', 'blockly'  ),
		description: __( 'A simple block for Terms and Conditions', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'terms', 'blockly' ),
			__( 'Conditions', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			items: {
				type: 'array',
				default: [
					{
						title: '',
						description: '',
						style: ''
					}
				]
			},
		},
		example: {
			attributes: {
				items: [
					{
						title: 'Terms and Conditions',
						description: 'lorem ipsum dolores sit amet',
						style: 'green' // green | red
					}
				]
			},
		},
        edit: Edit,
        save: () => null
	},
);
