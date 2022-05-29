//WordPress dependencies
import { __ } from '@wordpress/i18n';
import { Component,Fragment } from '@wordpress/element';
import { RichText,withFontSizes, withColors,AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';
//internal dependencies
import Inspector from './inspector';
import { computeFontSize } from '../../../utils/helper';
//external dependencie
import classnames from 'classnames';

class Edit extends Component {
    
    render(){
        const { 
            attributes: { content, name_show_hide,name,padding,borderRadius,style_type,align }, 
            backgroundColor,
            className,
            setAttributes,
            textColor,
            iconColor,
            fontSize 
        } = this.props;

        const styles = {
            backgroundColor: backgroundColor?.color,
            color: textColor?.color,
            fontSize: computeFontSize( fontSize ) ?? undefined,
            borderRadius: borderRadius ? borderRadius : null,
			padding: padding ? padding + 'px' : null,
            textAlign: align
        }

		const nameSize = Math.floor( fontSize.size * 1.2 );
		const stylesName = {
			fontSize: fontSize.size ? nameSize + 'px' : undefined,
		};

        const classes = classnames( 'bly-quote-box-wrap',
            style_type == 'style_two' && 'quote-bg-icon-center',
            className,
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

        const hrStyle={
            borderColor: textColor?.color,
        }

        const hrStyleClass= classnames({
            [ textColor.class ]: textColor.class,
        })

        const svgStyle={
            fill: iconColor?.color,
        }

        const svgStyleClass= classnames({
            [ iconColor.class ]: iconColor.class,
        })

        return([
            <BlockControls key="controls">
				<AlignmentToolbar
					value={ align }
					onChange={ ( nextAlign ) =>setAttributes( { align: nextAlign } )}
				/>
			</BlockControls>,

            <Inspector key={ 'bly-quote-inspector-' + this.props.clientId } { ...{ setAttributes, ...this.props } } />,

            <Fragment>
                {style_type == 'style_one' && (
                   <section className={classes} style={styles} >
                        <div class="bly-quote-box-container">
                            <svg id="Group_135" data-name="Group 135" xmlns="http://www.w3.org/2000/svg" width="72.3" height="43.6" viewBox="0 0 72.3 43.6">
                                <path style={svgStyle} className={svgStyleClass} id="Path_97" data-name="Path 97" d="M150.98,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,150.98,678.162Z" transform="translate(-134.725 -634.562)"/>
                                <path style={svgStyle} className={svgStyleClass} id="Path_98" data-name="Path 98" d="M190.77,678.162a16.254,16.254,0,0,0,.93-32.481,22.835,22.835,0,0,1,6.266-11.119c-8.977,0-23.451,12.243-23.451,27.346A16.255,16.255,0,0,0,190.77,678.162Z" transform="translate(-134.725 -634.562)"/>
                            </svg>
                            <RichText 
                                tagName= "p"
                                className= "message"
                                value= { content }
                                onChange= { ( content ) => setAttributes( { content } ) }
                                placeholder= 'Add text...'
                                format="string"
                            />
                            {name_show_hide && (
                                <div class="name-container">
                                    <hr style={hrStyle} className={hrStyleClass} />
                                    <RichText 
                                        tagName= "p"
                                        className= "name"
                                        value= { name }
                                        onChange= { ( name ) => setAttributes( { name } ) }
                                        style= { stylesName }
                                        placeholder= 'Add name...'
                                        format="string"
                                    />
                                </div>
                            )} 
                        </div>
                    </section>
                )}

                {style_type == 'style_two' && (
                    <section className={classes} style={styles} >
                        <div class="bly-quote-box-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="173.082" height="130.613" viewBox="0 0 173.082 130.613">
                                <g id="Group_139" data-name="Group 139" class="cls-1" transform="translate(-413.459 -153.944)">
                                    <path style={svgStyle} className={svgStyleClass} style={{opacity: 0.1,mixBlendMode: 'multiply',isolation: 'isolate'}} id="Path_99" data-name="Path 99" class="cls-2" d="M458.73,214.044a32.818,32.818,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.787,29.787,0,0,1-5.845,14.519q-13.833,18.117-36.212,15.016a31.234,31.234,0,0,1-14.2-5.815q-15.517-11.466-15.513-29.4a42.668,42.668,0,0,1,2.8-15.624l39.265-79.33h26.041Zm100.965,0a32.822,32.822,0,0,1,16.429,9.215q12.3,12.306,10.074,31.314a29.79,29.79,0,0,1-5.844,14.519q-13.827,18.106-36.189,15.019A31.248,31.248,0,0,1,529.95,278.3q-15.54-11.468-15.531-29.4a42.691,42.691,0,0,1,2.806-15.624l39.266-79.33h26.041Z"/>
                                </g>
                            </svg>
                            <RichText 
                                tagName = "p"
                                className = "message"
                                value = { content }
                                onChange = { ( content ) => setAttributes( { content } ) }
                                placeholder = 'Add text...'
                                format="string"
                            />
                        </div>
                    </section>
                )}
            </Fragment>
        ]);
    }
}
export default compose( [
	withColors( 'backgroundColor', { textColor: 'color' },{ iconColor: 'color' }),
	withFontSizes( 'fontSize' ),
] )( Edit );

 