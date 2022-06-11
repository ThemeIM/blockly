import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/client-feedback", {
		title: __( 'Client Feedback', 'blockly'  ),
		description: __( 'A simple block for Client Feedback listing', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'client', 'blockly' ),
			__( 'feedback', 'blockly' ),
			__( 'notice', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			title: {
				type: 'string',
				default: ''
			},
			subtitle: {
				type: 'string',
				default: ''
			},
			video_thumbnail: {
				type: 'string',
				default: ''
			},
			video_url: {
				type: 'string',
				default: ''
			},
			items: {
				type: 'array',
				default: [
					{
						user_name: '',
						user_info: '',
						user_image: '',
						review: '',
					}
				]
			}
		},
		example: {
			attributes: {
				title: __('Our Customer Feedback'),
				subtitle: __('We teach martial arts because we love it — not because we want to make money on you.'),
				video_thumbnail: '',
				video_url: '',
				items: [
					{
						user_name: '',
						user_info: '',
						user_image: '',
						review: '',
					}
				]
			},
		},
        edit: Edit,
        save: Save
	},
);
