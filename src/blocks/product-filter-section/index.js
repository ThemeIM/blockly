import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { SelectControl, PanelBody, CheckboxControl, Button, IconButton, RangeControl } from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/product-filter-section", {
		title: __( 'Products filter', 'blockly' ),
		description: __( 'A simple block for Products filter slider', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'filter', 'blockly' ),
			__( 'products', 'blockly' ), 
			__( 'notice', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			categories: {
				type: 'array',
				default: []
			},
		},
        edit: Edit,
        save: () => null
	},
);
