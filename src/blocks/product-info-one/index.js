import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { SelectControl, PanelBody, CheckboxControl, Button, IconButton, RangeControl } from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/product-info-one", {
		title: __( 'Product Info One', 'blockly'  ),
		description: __( 'Product info block - 1', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'product', 'blockly' ),
			__( 'info', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			main_title: {
				type: 'string',
				default: ''
			},
			main_description: {
				type: 'string',
				default: ''
			},
			info_items: {
				type: 'array',
				default: []
			},
			secondary_title: {
				type: 'string',
				default: ''
			},
			secondary_description: {
				type: 'string',
				default: ''
			},
		},
		example: {
			attributes: {
				main_title: __('Considerable Notice'),
				main_description: __('To begin the customization, one of our skilled project managers with...'),
				info_items: [
					__('To begin the customization, one skilled project managers provide you with a list of similarly designed themes.'),
					__('To begin the customization, one skilled project managers provide you with a list of similarly designed themes.'),
				],
				secondary_title: __('Replace a Heading Here'),
				secondary_description: __('To begin the customization, one of our skilled project managers will provide...'),
			},
		},
        edit: Edit,
        save: () => null
	},
);
