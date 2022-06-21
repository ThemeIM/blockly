import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';
import Save from './components/save';

// import './styles/style.scss';
// import './styles/editor.scss';

registerBlockType ( "blockly/feature", {
		title: __( 'Feature section', 'blockly'  ),
		description: __( 'A simple block for features listing', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'feature', 'blockly' ),
			__( 'notice', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			items: {
				type: 'array',
				default: [
					{
						icon_image: '',
						info: '',
					}
				]
			}
		},
		example: {
			attributes: {
				items: [
					{
						icon_image: '',
						info: '24x7 Hours Instant Support',
					}
				],
			},
		},
        edit: Edit,
        save: Save
	},
);
