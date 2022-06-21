/**
 * BLOCK: Pricing Table Inner
 */

//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component,Fragment } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { dispatch,select }  from '@wordpress/data';
//internal dependencies
import Inspector from './components/inspector';
import './styles/style.scss';
import './styles/editor.scss';
//external dependencie
import classnames from 'classnames';

const ALLOWED_BLOCKS = [
	'blockly/pricing-table-subtitle',
	'blockly/pricing-table-subtitle2',
	'blockly/pricing-table-title',
	'blockly/pricing-table-description',
	'blockly/pricing-table-price',
	'blockly/pricing-table-button',
	'core/paragraph',
	'core/image',
	'core/html',
	'core/shortcode',
];

const ALLOWED_BLOCKS2 = [
	'blockly/pricing-table-title',
	'blockly/pricing-table-description',
	'blockly/pricing-table-price',
	'blockly/pricing-table-button',
	'core/paragraph',
	'core/image',
	'core/html',
	'core/shortcode',
];

class EditPricingTableBlock extends Component {

	render() {
		const {
			attributes: {
				borderWidth,
				borderColor,
				borderRadius,
				backgroundColor,
				padding,
				alignment,
				pricing_style,
			},
			setAttributes,
		} = this.props;

		const styles = {
			borderWidth: borderWidth ? borderWidth : null,
			borderStyle: 0 < borderWidth ? 'solid' : null,
			borderColor: borderColor ? borderColor : null,
			borderRadius: borderRadius ? borderRadius : null,
			backgroundColor: backgroundColor ? backgroundColor : null,
			padding: padding ? padding + '%' : null,
		};

		return [

			<BlockControls key="controls">
				<AlignmentToolbar
					value={ alignment }
					onChange={ ( nextAlign ) => {
						setAttributes( { alignment: nextAlign } );
					} }
				/>
			</BlockControls>,

			<Inspector { ...this.props } />,
		
			<Fragment key={ 'bly-pricing-table-inner-fragment-' + this.props.clientId } >
				<div 
					className={ 
						classnames( alignment ? 'bly-block-pricing-table-' + alignment : 'bly-block-pricing-table-center',
						'bly-block-pricing-table') 
					}
					itemScope
					itemType="http://schema.org/Product"
				>
					<div className="bly-block-pricing-table-inside" style={ styles } >

						{pricing_style =='style_one' && (
							<InnerBlocks
								template={ [
									[
										'blockly/pricing-table-title',
										{
											title: '<strong>Price Title</strong>',
											customFontSize: 20,
											paddingTop: 10,
											paddingRight: 10,
											paddingBottom: 10,
											paddingLeft: 10,
										},
									],
									[
										'blockly/pricing-table-subtitle',
										{
											subtitle: 'Price Subtitle',
											customFontSize: 18,
											paddingTop: 20,
											paddingRight: 0,
											paddingBottom: 0,
											paddingLeft: 0,
										},
									],
									[
										'blockly/pricing-table-price',
										{
											price: '49',
											currency: '$',
											customFontSize: 60,
											term: '/mo',
											paddingTop: 10,
											paddingRight: 20,
											paddingBottom: 10,
											paddingLeft: 20,
										},
									],
									[
										'blockly/pricing-table-subtitle2',
										{
											subtitle: 'Price Subtitle',
											customFontSize: 20,
											paddingTop: 0,
											paddingRight: 0,
											paddingBottom: 20,
											paddingLeft: 0,
										},
									],
									[
										'blockly/pricing-table-features',
										{
											features:'<li>Product Feature One</li><li>Product Feature Two</li><li>Product Feature Three</li>',
											multilineTag: 'li',
											ordered: false,
											customFontSize: 20,
											paddingTop: 15,
											paddingRight: 20,
											paddingBottom: 15,
											paddingLeft: 20,
										},
									],
									[
										'blockly/pricing-table-button',
										{
											buttonText: 'Buy Now',
											buttonBackgroundColor: '#255b95',
											paddingTop: 0,
											paddingRight: 0,
											paddingBottom: 0,
											paddingLeft: 0,
										},
									],
		
								] }
								templateLock='all'
								allowedBlocks={ ALLOWED_BLOCKS }
								templateInsertUpdatesSelection={ false }
							/>
						)}

						{pricing_style =='style_two' && (
							<InnerBlocks
								template={ [
									[
										'blockly/pricing-table-title',
										{
											title: '<strong>Price Title</strong>',
											customFontSize: 20,
											paddingTop: 10,
											paddingRight: 10,
											paddingBottom: 10,
											paddingLeft: 10,
										},
									],

									[
										'blockly/pricing-table-price',
										{
											price: '49',
											currency: '$',
											customFontSize: 60,
											term: '/mo',
											paddingTop: 10,
											paddingRight: 20,
											paddingBottom: 10,
											paddingLeft: 20,
										},
									],

									[
										'blockly/pricing-table-features',
										{
											features:'<li>Product Feature One</li><li>Product Feature Two</li><li>Product Feature Three</li>',
											multilineTag: 'li',
											ordered: false,
											customFontSize: 20,
											paddingTop: 15,
											paddingRight: 20,
											paddingBottom: 15,
											paddingLeft: 20,
										},
									],
									[
										'blockly/pricing-table-button',
										{
											buttonText: 'Buy Now',
											buttonBackgroundColor: '#255b95',
											paddingTop: 0,
											paddingRight: 0,
											paddingBottom: 0,
											paddingLeft: 0,
										},
									],


								] }
								templateLock='all'
								allowedBlocks={ ALLOWED_BLOCKS2 }
								templateInsertUpdatesSelection={ false }
							/>
						)}
						
					</div>
				</div>
			</Fragment>,
		];
	}
}

// Register the block
registerBlockType( 'blockly/pricing-table-inner', {
	title: __( 'Pricing Column', 'blockly' ),
	description: __( 'Add a pricing column.', 'blockly' ),
	icon: 'cart',
	category: 'blockly',
	parent: [ 'blockly/pricing-table' ],
	keywords: [
		__( 'pricing', 'blockly' ),
		__( 'shop', 'blockly' ),
		__( 'buy', 'blockly' ),
	],
	attributes: {

		pricing_style: {
			type: 'string',
			default: 'style_one'
		},

		borderWidth: {
			type: 'number',
			default: 1,
		},
		borderColor: {
			type: 'string',
			default:'#70707080',
		},
		borderRadius: {
			type: 'number',
			default: 0,
		},
		backgroundColor: {
			type: 'string',
		},
		alignment: {
			type: 'string',
		},
		padding: {
			type: 'number',
			default:0,
		},
	},

	bly_settings_data: {
		bly_pricing_inner_padding: {
			title: __( 'Pricing Column Padding', 'blockly' ),
		},
		bly_pricing_inner_borderWidth: {
			title: __( 'Pricing Column Border', 'blockly' ),
		},
		bly_pricing_inner_borderRadius: {
			title: __( 'Pricing Column Border Radius', 'blockly' ),
		},
		bly_pricing_inner_borderColor: {
			title: __( 'Pricing Column Border Color', 'blockly' ),
		},
		bly_pricing_inner_colorSettings: {
			title: __( 'Pricing Column Background Color', 'blockly' ),
		},
	},

	edit: EditPricingTableBlock,

	save: (props) => {
   
		const {
			borderWidth,
			borderColor,
			borderRadius,
			backgroundColor,
			alignment,
			padding,
		} = props.attributes;

		const styles = {
			borderWidth: borderWidth ? borderWidth : null,
			borderStyle: 0 < borderWidth ? 'solid' : null,
			borderColor: borderColor ? borderColor : null,
			borderRadius: borderRadius ? borderRadius : null,
			backgroundColor: backgroundColor ? backgroundColor : null,
			padding: padding ? padding + '%' : null,
		};

		return (
			<div
				className={ classnames(
					alignment
						? 'bly-block-pricing-table-' + alignment
						: 'bly-block-pricing-table-center',
					'bly-block-pricing-table'
				) }
				itemScope
				itemType="http://schema.org/Product"
			>
				<div className="bly-block-pricing-table-inside" style={ styles }>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},

} );
