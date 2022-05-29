//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { RichText, withFontSizes, withColors } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
//internal dependencies
import Inspector from '../global/inspector';
import { computeFontSize } from '../../../../utils/helper';
//external dependencie
import classnames from 'classnames';

class Edit extends Component {
    
	render() {

		const { 
			attributes: { title,paddingTop,paddingRight,paddingBottom,paddingLeft },
		 	isSelected,className,setAttributes,fallbackFontSize,fontSize,customFontSize,backgroundColor,textColor
		} = this.props;

		const editClassName = classnames( 
			{
				'bly-pricing-table-title': true,
				'has-text-color': textColor.color,
				'has-background': backgroundColor.color,
				[ backgroundColor.class ]: backgroundColor.class,
				[ textColor.class ]: textColor.class,
			},
			fontSize?.class && {
				[ fontSize?.class ]: fontSize?.class,
			} 
		);

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
			<Fragment key={ 'bly-pricing-table-inner-component-title-' + this.props.clientId }>
				<Inspector { ...this.props } />

                <RichText
					tagName="div"
					itemProp="name"
					placeholder={ __( 'Price Title', 'blockly' ) }
					keepPlaceholderOnFocus
					value={ title }
					onChange={ ( value ) => setAttributes( { title: value } ) }
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
