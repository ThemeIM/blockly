import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
import { SelectControl, PanelBody, CheckboxControl, Button, IconButton, RangeControl } from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';
import Edit from './components/edit';
import Save from './components/save';

import './styles/style.scss';
import './styles/editor.scss';

registerBlockType ( "blockly/table-of-contents-meta", {
		title: __( 'Table of Contents Sidebar', 'blockly'  ),
		description: __( 'A simple block for Table of Contents', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
			foreground: '#004085',
		},
		keywords: [
			__( 'table', 'blockly' ),
			__( 'toc', 'blockly' ),
			__( 'table-of-contents', 'blockly' ),
			__( 'notice', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		attributes: {
			title: {
				type: 'string',
				default: 'Table of Contents'
			},
		},
		example: {
			attributes: {
				content: __( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly' ),
			},
		},
        edit: Edit,
        save: props => {
			return null;
		}
	},
);
