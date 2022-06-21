/**
 * BLOCK: Testimonial
 */
//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks'
//internal dependencies
import Edit from './components/edit';
import Save from './components/save';
import './styles/editor.scss';
import './styles/style.scss';

// Register the block testimonial
registerBlockType( 'blockly/testimonial', {
	title: __( 'Testimonial', 'blockly' ),
	description: __(
		'Add a user testimonial with a name and title.',
		'blockly'
	),
	icon: {
        src: 'testimonial',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'testimonial', 'blockly' ),
		__( 'quote', 'blockly' ),
		__( 'blockly', 'blockly' ),
	],
	example: {
		attributes: {
			testimonialContent: __( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly' ),
			testimonialName: __('Russell Hawlader','blockly'),
			testimonialTitle: __('ARNTECH Founder & CEO','blockly')
		},
	},
	attributes: {
		style_type: {
			type: 'string',
			default: 'style_one'
		},
		testimonialName: {
			type: 'array',
			selector: '.bly-testimonial-name',
			source: 'children',
		},
		testimonialTitle: {
			type: 'array',
			selector: '.bly-testimonial-title',
			source: 'children',
		},
		testimonialContent: {
			type: 'array',
			selector: '.testimonial-content',
			source: 'children',
		},
		testimonialAlignment: {
			type: 'string',
		},
		testimonialImgURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		testimonialImgID: {
			type: 'number',
		},
		testimonialBackgroundColor: {
			type: 'string',
			default: '#f2f2f2',
		},
		testimonialTextColor: {
			type: 'string',
			default: '#32373c',
		},
		testimonialFontSize: {
			type: 'number',
			default: 18,
		},
		testimonialCiteAlign: {
			type: 'string',
			default: 'left-aligned',
		},
	},

	edit: ( props ) => {
		return <Edit { ...props } />;
	},

	save: ( props ) => {
		return <Save { ...props } />;
	},
} );
