import { __ } from '@wordpress/i18n';
import { Component,Fragment } from '@wordpress/element';
import classnames from 'classnames';
import { RichText, getColorClassName, getFontSizeClass } from '@wordpress/block-editor';

export default class Save extends Component {

    render() {

        const { 
            backgroundColor,
            content,
            customBackgroundColor,
            customFontSize,
            customTextColor,
            fontSize,
            align,
            textColor,
            fontFamily,
        } = this.props.attributes;

        const textClass = getColorClassName( 'color', textColor );
        const backgroundClass = getColorClassName( 'background-color', backgroundColor );
        const fontSizeClass = getFontSizeClass( fontSize );


        const classes = classnames( 'bly-highlight-content', {
            'has-text-color': textColor || customTextColor,
            [ textClass ]: textClass,
            'has-background': backgroundColor || customBackgroundColor,
            [ backgroundClass ]: backgroundClass,
            [ fontSizeClass ]: fontSizeClass,
        } );
    
        const styles = {
            backgroundColor: backgroundClass ? undefined : customBackgroundColor,
            color: textClass ? undefined : customTextColor,
            fontSize: fontSizeClass ? undefined : customFontSize,
        };
    
        return RichText.isEmpty( content ) ? null : (
            <p style={ { textAlign: align,fontFamily} }>
                <RichText.Content
                    tagName="mark"
                    className={ classes }
                    style={ styles }
                    value={ content }
                />
            </p>
        );


    }
}