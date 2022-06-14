import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { SelectControl, PanelBody, CheckboxControl, Button, IconButton, RangeControl } from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/trending-products-slider", {
		title: __( 'Trending products slider', 'blockly' ),
		description: __( 'A simple block for Trending products slider', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'trending', 'blockly' ),
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
			products: {
				type: 'array',
				default: []
			},
			backgroudImage: {
				type: 'string',
				default: ''
			}
		},
		example: {
			attributes: {
				title: '',
				subtitle: '',
				products: '',
			},
		},
        edit: Edit,
        save: () => null
	},
);
