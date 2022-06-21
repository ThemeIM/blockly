import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { SelectControl, PanelBody, CheckboxControl, Button, IconButton, RangeControl } from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/featured-products-slider", {
		title: __( 'Featured products slider', 'blockly' ),
		description: __( 'A simple block for Featured products slider', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'featured', 'blockly' ),
			__( 'products', 'blockly' ), 
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
			btn_name: {
				type: 'string',
				default: ''
			},
			products: {
				type: 'array',
				default: []
			}
		},
		example: {
			attributes: {
				title: '',
				subtitle: '',
				btn_name: '',
				btn_url: '',
				products: '',
			},
		},
        edit: Edit,
        save: () => null
	},
);
