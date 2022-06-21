import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { SelectControl, PanelBody, CheckboxControl, Button, IconButton, RangeControl } from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/feature-list", {
		title: __( 'Feature List', 'blockly' ),
		description: __( 'A simple block for Feature List', 'blockly' ),
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
			item_style: {
				type: 'string',
				default: 'normal' // normal | bordered
			},
			feature_list: {
				type: 'array',
				default: [
					{
						feature: 'Introduction',
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
