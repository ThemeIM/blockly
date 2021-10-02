//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Component, Fragment } from '@wordpress/element';
import { RichText, withFontSizes, withColors } from '@wordpress/block-editor';
//internal dependencies
import Inspector from '../global/inspector';
import { computeFontSize } from '../../../../utils/helper';
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
                customFontSize
			},
			isSelected,
			className,
			setAttributes,
			fallbackFontSize,
			fontSize,
			backgroundColor,
			textColor,
		} = this.props;
       
		const editClassName = classnames( {
			'bly-pricing-table-subtitle': true,
			'has-text-color': textColor.color,
			'has-background': backgroundColor.color,
			[ backgroundColor.class ]: backgroundColor.class,
			[ textColor.class ]: textColor.class,
		},
		fontSize?.class && {
			[ fontSize?.class ]: fontSize?.class,
		});

		const editStyles = {
			backgroundColor: backgroundColor.color,
			color: textColor.color,
			paddingTop: paddingTop ? paddingTop + 'px' : undefined,
			paddingRight: paddingRight ? paddingRight + 'px' : undefined,
			paddingBottom: paddingBottom ? paddingBottom + 'px' : undefined,
			paddingLeft: paddingLeft ? paddingLeft + 'px' : undefined,
			fontSize: computeFontSize( fontSize ) ?? undefined,
		};

		return [
			<Fragment key={ 'bly-pricing-table-inner-component-subtitle-' + this.props.clientId }>
				<Inspector { ...this.props } />
				<RichText
					tagName="div"
					placeholder={ __( 'Price Subtitle', 'blockly' ) }
					keepPlaceholderOnFocus
					value={ subtitle }
					onChange={ ( value ) =>
						setAttributes( { subtitle: value } )
					}
					style={ editStyles }
					className={ editClassName ? editClassName : undefined }
				/>
			</Fragment>,
		];
	}
}

export default compose( [
	withFontSizes( 'fontSize' ),
	withColors( 'backgroundColor', { textColor: 'color' } ),
] )( Edit );
