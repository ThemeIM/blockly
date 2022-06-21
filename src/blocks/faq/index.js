import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { SelectControl, PanelBody, CheckboxControl, Button, IconButton, RangeControl } from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/faq", {
		title: __( 'FAQ', 'blockly'  ),
		description: __( 'A simple block for FAQs', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'faq', 'blockly' ),
			__( 'notice', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			title: {
				type: 'string',
				default: 'Frequently Asked Questions'
			},
			description: {
				type: 'string',
				default: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.'
			},
			faq_items: {
				type: 'array',
				default: [
					{
						question: 'What is ThemeI\'M Market?',
						answer: 'Download thousands of free & premium WordPress Theme, HTML , bootstrap template, flutter app, & graphic assets for your UI, UX design project Browse All Resources'
					}
				]
			}
		},
		example: {
			attributes: {
				content: __( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly' ),
			},
		},
        edit: Edit,
        save: Save
	},
);
