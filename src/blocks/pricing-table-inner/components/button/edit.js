// wordpress dependencies
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { RichText, withFontSizes, withColors, InnerBlocks, URLInput } from '@wordpress/block-editor';
import { Button, Dashicon, Icon } from '@wordpress/components';
//internal dependencies
import Inspector from './inspector';
import CustomButton from '../../../button/components/button';
//external dependencie
import classnames from 'classnames';

class Edit extends Component {

	render() {
		
		const {
			attributes: {
				subtitle,
				paddingTop,
				paddingRight,
				paddingBottom,
				paddingLeft,
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
				buttonTarget,
			},
			isSelected,
			className,
			setAttributes,
			backgroundColor,
		} = this.props;


		const editClassName = classnames( {
			'bly-pricing-table-button': true,
		} );


		const editStyles = {
			backgroundColor: backgroundColor.color,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
		};

		return [
			<Fragment key={ 'bly-pricing-table-inner-component-button-' + this.props.clientId }>

				<Inspector { ...this.props } />

				<div className={ editClassName ? editClassName : undefined } style={ editStyles } >
					
					<CustomButton { ...this.props }>
						<RichText
							tagName="span"
							placeholder={ __( 'Button text...','blockly') }
							keepPlaceholderOnFocus
							value={ buttonText }
							allowedFormats={ [] }
							className={ classnames('bly-button', buttonShape, buttonSize ) }
							style={ {color: buttonTextColor, backgroundColor: buttonBackgroundColor,} }
							onChange={ ( value ) =>setAttributes( { buttonText: value } )}
						/>
					</CustomButton>

					{ isSelected && (
						<form 
							key="form-link"
							className={ `blocks-button__inline-link ab-button-${ buttonAlignment }` }
							onSubmit={ ( event ) => event.preventDefault() }
							style={ { textAlign: buttonAlignment } } 
						>
							<Dashicon icon={ 'admin-links' } />
							<URLInput
								className="button-url"
								value={ buttonUrl }
								onChange={ ( value ) =>setAttributes( { buttonUrl: value } )}
							/>
							<Button label={ __( 'Apply', 'blockly' ) } type="submit">
								<Icon icon="editor-break" />
							</Button>
						</form>
					) }

				</div>
			</Fragment>,
		];
	}
}

export default compose( [
	withFontSizes( 'fontSize' ),
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
