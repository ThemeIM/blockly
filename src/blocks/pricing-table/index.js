/**
 * BLOCK: Pricing Table
 */

//wordpress dependencies
import  { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { BlockControls, BlockAlignmentToolbar, InnerBlocks } from '@wordpress/block-editor';
import { dispatch }  from '@wordpress/data';
//internal dependencies
import Inspector from './components/inspector';
import PricingTable from './components/pricing';
//external dependencies
import classnames from 'classnames';
import memoize from 'memize';
import _times from 'lodash/times';

const ALLOWED_BLOCKS = [ 'blockly/pricing-table-inner' ];

// Get the pricing template
const getPricingTemplate = memoize( ( columns ) => {
	return _times( columns, () => ['blockly/pricing-table-inner'] );
} );


//edit pricing table component
class EditPricingBlock extends Component{

	componentDidUpdate( prevProps ) {
		if ( this.props.attributes.columns !== prevProps.attributes.columns ) {
			dispatch( 'core/block-editor' ).synchronizeTemplate();
		}
		// update child component atteibute
		const pricing_styles = [];
		let   pricingTableId = this.props.clientId;
        const pricingTable   = wp.data.select('core/block-editor').getBlock(pricingTableId);
		pricingTable.innerBlocks.map(block => {
			dispatch('core/block-editor').updateBlockAttributes(block.clientId, {'pricing_style': this.props.attributes.style_type })
		});
	}


    render(){

		const { attributes: { columns, columnsGap, align },setAttributes } = this.props;

        return[
			<BlockControls key="controls">
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( align ) => setAttributes( { align } ) }
					controls={ [ 'center', 'wide', 'full' ] }
				/>
			</BlockControls>,

			<Inspector key={ 'bly-pricing-table-inspector-' + this.props.clientId } { ...{ setAttributes, ...this.props } } />,

            <PricingTable key={ 'bly-pricing-table-' + this.props.clientId } {...this.props} >
                <div className={ classnames('bly-pricing-table-wrap-admin','bly-block-pricing-table-gap-' + columnsGap) } >
					<InnerBlocks
						template={ getPricingTemplate( columns ) }
						templateLock="all"
						allowedBlocks={ ALLOWED_BLOCKS }
					/>
                </div>
            </PricingTable>,
        ]
    }

}


// Register the block
registerBlockType( 'blockly/pricing-table', {
	title: __( 'Pricing', 'blockly' ),
	description: __( 'Add a pricing table.', 'blockly' ),
	icon: {
        src: 'cart',
        background: '#cce5ff',
        foreground: '#004085'
    },
	category: 'blockly',
	keywords: [
		__( 'pricing table', 'blockly' ),
		__( 'shop', 'blockly' ),
		__( 'purchase', 'blockly' ),
	],
	attributes: {
		style_type: {
			type: 'string',
			default: 'style_one'
		},
		columns: {
			type: 'number',
			default: 2,
		},
		columnsGap: {
			type: 'number',
			default: 2,
		},
		align: {
			type: 'string',
		},
	},

	bly_settings_data: {
		bly_pricing_columns: {
			title: __( 'Pricing Columns', 'blockly' ),
		},
		bly_pricing_columnsGap: {
			title: __( 'Pricing Columns Gap', 'blockly' ),
		},
	},

	// Add alignment to block wrapper
	getEditWrapperProps( { align } ) {
		if (
			'left' === align ||
			'right' === align ||
			'full' === align ||
			'wide' === align
		) {
			return { 'data-align': align };
		}
	},


	edit: EditPricingBlock,

	save: ( props ) => {
		
		const { columnsGap } = props.attributes;
		const className = classnames( [
			'bly-pricing-table-wrap',
			'bly-block-pricing-table-gap-' + columnsGap,
		] );

		return (
			
			<PricingTable { ...props }>
				<div className={ className ? className : undefined }>
					<InnerBlocks.Content />
				</div>
			</PricingTable>
		);
	},

} );
