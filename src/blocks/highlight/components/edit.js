
import Inspector from './inspector';
import classnames from 'classnames';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { Component,Fragment } from '@wordpress/element';
import  { RichText, AlignmentToolbar, BlockControls,FontSizePicker, withFontSizes, withColors, ContrastChecker, } from '@wordpress/block-editor';
import { computeFontSize } from '../../../utils/helper';

class Edit extends Component {

    render(){

		const {
            attributes:{
                content,
                align,
            },
            backgroundColor,
            className,
            mergeBlocks,
            onReplace,
            setAttributes,
            textColor,
            fontSize,
        } = this.props;

		const classes = classnames( 'bly-highlight-content',
			backgroundColor && {
				'has-background': backgroundColor.color,
				[ backgroundColor.class ]: backgroundColor.class,
			},
			textColor && {
				'has-text-color': textColor.color,
				[ textColor.class ]: textColor.class,
			},
			fontSize?.class && {
				[ fontSize?.class ]: fontSize?.class,
			}
		);

     
	

        return [
			
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) =>setAttributes( { align: nextAlign } )}
				/>
			</BlockControls>,

			<Inspector key={ 'bly-highlight-inspector-' + this.props.clientId } { ...{ setAttributes, ...this.props } } />,

            <p className={ className } style={ { textAlign: align } }>
				<RichText
					tagName="mark"
					placeholder={ __( 'Add highlighted text…', 'blockly' ) }
					value={ content }
					onChange={ ( value ) => setAttributes( { content: value } ) }
					className={ classes }
					style={ {
                        backgroundColor: backgroundColor?.color,
						color: textColor?.color,
						fontSize: computeFontSize( fontSize ) ?? undefined,
					} }
					keepPlaceholderOnFocus
				/>
			</p>,

		]
    }

}
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' }),
	withFontSizes( 'fontSize' ),
] )( Edit );