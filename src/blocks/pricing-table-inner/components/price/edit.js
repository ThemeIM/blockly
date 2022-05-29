//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { RichText, withFontSizes, withColors } from '@wordpress/block-editor';
//internal dependencies
import Inspector from './inspector';
import { computeFontSize } from '../../../../utils/helper';
//external dependencie
import classnames from 'classnames';

class Edit extends Component {
	
	render() {

		const {
			attributes: {
				price,
				currency,
				term,
				showTerm,
				showCurrency,
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft,
			},
			isSelected,
			className,
			setAttributes,
			fallbackFontSize,
			fontSize,
			backgroundColor,
			textColor,
		} = this.props;

		// Setup wrapper class names
		const editClassWrapperName = classnames( {
			'bly-pricing-table-price-wrap': true,
			'has-text-color': textColor.color,
			'has-background': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
			'bly-pricing-has-currency': showCurrency,
		} );

		// Setup price class names
		const editClassName = classnames( {
			'bly-pricing-table-price': true,
			[ fontSize.class ]: fontSize.class,
		} );

		// Setup wrapper styles
		const editWrapStyles = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
		};

		// Setup price styles
		const editStyles = {
			fontSize: computeFontSize( fontSize ) ?? undefined,
			//fontSize: fontSize.size ? fontSize.size + 'px' : undefined,
		};

		// Setup currency styles
		const currencySize = Math.floor( fontSize.size / 2.5 );
		const currencyStyles = {
			fontSize: fontSize.size ? currencySize + 'px' : undefined,
		};

		// Setup term styles
		const termSize = Math.floor( fontSize.size / 2.5 );
		const termStyles = {
			fontSize: fontSize.size ? termSize + 'px' : undefined,
		};

		return [
			<Fragment key={ 'bly-pricing-table-inner-component-price-' + this.props.clientId }>
				<Inspector { ...this.props } />

				<div className={ editClassWrapperName ? editClassWrapperName : undefined } style={ editWrapStyles } >
					<div itemProp="offers" itemScope itemType="http://schema.org/Offer" >
						{ showCurrency && (
							<RichText
								tagName="span"
								itemProp="priceCurrency"
								placeholder={ __( '$', 'blockly' ) }
								keepPlaceholderOnFocus
								value={ currency }
								onChange={ ( value ) =>setAttributes( { currency: value } ) }
								className="bly-pricing-table-currency"
								style={ currencyStyles }
							/>
						) }
						<RichText
							tagName="div"
							itemProp="price"
							placeholder={ __( '49', 'blockly' ) }
							keepPlaceholderOnFocus
							value={ price }
							onChange={ ( value ) => setAttributes( { price: value } ) }
							style={ editStyles }
							className={ editClassName ? editClassName : undefined }
						/>
						{ showTerm && (
							<RichText
								tagName="span"
								value={ term }
								placeholder={ __( '/mo', 'blockly' ) }
								keepPlaceholderOnFocus
								onChange={ ( value ) => setAttributes( { term: value } ) }
								className="bly-pricing-table-term"
								style={ termStyles }
							/>
						) }
					</div>

				</div>
			</Fragment>,
		];
	}
}

export default compose( [
	withFontSizes( 'fontSize' ),
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
