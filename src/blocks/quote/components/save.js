//WordPress dependencies
import { __ } from '@wordpress/i18n';
import { Component,Fragment } from '@wordpress/element';
import { RichText,getFontSizeClass,getColorClassName } from '@wordpress/block-editor';
//external dependencie
import classnames from 'classnames';

export default class Save extends Component {

    render(){

        const { 
            content, 
            name_show_hide,
            name,
            padding,
            borderRadius,
            style_type,
            align,
            backgroundColor,
            textColor,
            iconColor,
            customIconColor,
            customFontSize,
            fontSize ,
			customBackgroundColor,
			customTextColor,
        } = this.props.attributes;

        const { className } = this.props;

		const fontSizeClass = getFontSizeClass( fontSize );
		const textClass = getColorClassName( 'color', textColor );
		const backgroundClass = getColorClassName('background-color',backgroundColor);
        const iconClass = getColorClassName('color',iconColor);
      
        const styles = {
            backgroundColor: backgroundClass? undefined: customBackgroundColor,
            color: textClass ? undefined : customTextColor,
            borderRadius: borderRadius ? borderRadius : null,
			padding: padding ? padding + 'px' : null,
            textAlign: align,
            fontSize: fontSizeClass ? undefined : customFontSize,
        }

		const computedFontSize = fontSizeClass ? undefined : customFontSize;
		const nameSize = Math.floor( computedFontSize * 1.2 );
		const stylesName = {
            fontSize: computedFontSize ? nameSize + 'px' : undefined,
		};

        const classes = classnames( 
            className,
            'bly-quote-box-wrap',
            style_type == 'style_two' 
            && 'quote-bg-icon-center',
            {
            'has-background': backgroundColor || customBackgroundColor,
            [ textClass ]: textClass,
            [ backgroundClass ]: backgroundClass
            },
            fontSize?.class && {
                [ fontSize?.class ]: fontSize?.class,
            }
		);

        const hrStyle={
            borderColor: textClass ? undefined : customTextColor,
        }

        const hrStyleClass= classnames({
            [ textClass ]: textClass
        })

        const svgStyle={
            fill: iconClass ? undefined : customIconColor,
        }

        const svgStyleClass= classnames({
            [ iconClass ]: iconClass
        })

        return(
            <Fragment>
                {style_type == 'style_one' && (
                    <section className={classes} style={styles} >
                        <div className="bly-quote-box-container">
                            <svg id="Group_135" data-name="Group 135" xmlns="http://www.w3.org/2000/svg" width="72.3" height="43.6" viewBox="0 0 72.3 43.6">
                                <path style={svgStyle} className={svgStyleClass} id="Path_97" data-name="Path 97" d="M150.98,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,150.98,678.162Z" transform="translate(-134.725 -634.562)"/>
                                <path style={svgStyle} className={svgStyleClass} id="Path_98" data-name="Path 98" d="M190.77,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,190.77,678.162Z" transform="translate(-134.725 -634.562)"/>
                            </svg>

                            <RichText.Content
                                tagName="p"
                                value={ content }
                                className="message"
						    />
                            {name_show_hide && (
                                <div className="name-container">
                                    <hr style={hrStyle} className={hrStyleClass} />
                                    <RichText.Content
                                        tagName="p"
                                        value={ name }
                                        className="name"
                                        style={stylesName}
                                    />
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {style_type == 'style_two' && (
                    <section className={classes} style={styles}>
                        <div class="bly-quote-box-container"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="173.082" height="130.613" viewBox="0 0 173.082 130.613">
                                <g id="Group_139" data-name="Group 139" class="cls-1" transform="translate(-413.459 -153.944)">
                                    <path style={svgStyle} className={svgStyleClass} style={{opacity: 0.1,mixBlendMode: 'multiply',isolation: 'isolate'}} id="Path_99" data-name="Path 99" class="cls-2" d="M458.73,214.044a32.818,32.818,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.787,29.787,0,0,1-5.845,14.519q-13.833,18.117-36.212,15.016a31.234,31.234,0,0,1-14.2-5.815q-15.517-11.466-15.513-29.4a42.668,42.668,0,0,1,2.8-15.624l39.265-79.33h26.041Zm100.965,0a32.822,32.822,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.79,29.79,0,0,1-5.844,14.519q-13.827,18.106-36.189,15.019A31.248,31.248,0,0,1,529.95,278.3q-15.54-11.468-15.531-29.4a42.691,42.691,0,0,1,2.806-15.624l39.266-79.33h26.041Z"/>
                                </g>
                            </svg>

                            <RichText.Content
                                tagName="p"
                                value={ content }
                                className="message"
                            />
                        </div>
                    </section>
                )}
            </Fragment>
        )
    }
}