/**
 * Internal dependencies
 */
import Testimonial from './testimonial';
/**
 * WordPress dependencies
 */
import { Component,Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';


export default class Save extends Component {


    render(){
        
        const {
			testimonialName,
			testimonialTitle,
			testimonialContent,
			testimonialAlignment,
			testimonialImgURL,
			testimonialTextColor,
            style_type,
		} = this.props.attributes;

        return (
            <Testimonial {...this.props}>

                { style_type == 'style_one' && (
					<div className="blockly-testimonial-wrap-symbol-container">
						<div className="blockly-testimonial-wrap-symbol-inner">
							<svg
								id="testimonial-quote-icon"
								data-name="testimonial-quote-icon"
								xmlns="http://www.w3.org/2000/svg"
								width="88.295"
								height="53.245"
								viewBox="0 0 88.295 53.245"
							>
								<path
									id="Path_55"
									data-name="Path 55"
									className="cls-1"
									d="M594.485,126.2a19.85,19.85,0,0,0-1.136,39.667A27.876,27.876,0,0,1,585.7,179.44c10.963,0,28.639-14.951,28.639-33.395A19.851,19.851,0,0,0,594.485,126.2Z"
									transform="translate(-526.041 -126.195)"
								/>
								<path
									id="Path_56"
									data-name="Path 56"
									className="cls-1"
									d="M527.434,126.2a19.85,19.85,0,0,0-1.136,39.667,27.876,27.876,0,0,1-7.652,13.578c10.964,0,28.639-14.951,28.639-33.395A19.851,19.851,0,0,0,527.434,126.2Z"
									transform="translate(-507.583 -126.195)"
								/>
							</svg>
						</div>
					</div>
				)}

                <div className="bly-testimonial-text">

                    { style_type == 'style_two' && (
                        <div className="bly-testiominal-image-wrap-upper">
                            <svg
                                id="quotes-upper"
                                xmlns="http://www.w3.org/2000/svg"
                                width="50.366"
                                height="53.151"
                                viewBox="0 0 50.366 53.151"
                            >
                                <g id="Group_1" data-name="Group 1">
                                <path
                                    id="Path_2"
                                    data-name="Path 2"
                                    d="M86.684,85.914,95.053,65.67a7.979,7.979,0,0,0-10.26,4.465l-2.3,5.714a55.944,55.944,0,0,0-4.057,20.916V103.2a8.216,8.216,0,0,0,8.216,8.216h7.358a5.027,5.027,0,0,0,5.027-5.027V85.914Z"
                                    transform="translate(-78.433 -65.138)"
                                    fill="#537cfa"
                                />
                                <path
                                    id="Path_3"
                                    data-name="Path 3"
                                    d="M137.653,97.676l8.369-20.244a7.978,7.978,0,0,0-10.26,4.466l-2.3,5.714a55.953,55.953,0,0,0-4.056,20.916v6.438a8.215,8.215,0,0,0,8.216,8.216h7.357A5.027,5.027,0,0,0,150,118.154V97.676Z"
                                    transform="translate(-99.636 -70.031)"
                                    fill="#537cfa"
                                />
                                </g>
                            </svg>
                        </div>
                    )}


                    <RichText.Content
                        tagName="div"
                        className="testimonial-content"
                        style={ {
                            textAlign: testimonialAlignment,
                        } }
                        value={ testimonialContent }
                    />

                   	{ style_type == 'style_two' && (
                        <div className="bly-testiominal-image-wrap-lower">
                            <svg
                                id="quotes-lower"
                                xmlns="http://www.w3.org/2000/svg"
                                width="50.366"
                                height="53.151"
                                viewBox="0 0 50.366 53.151"
                            >
                                <g id="Group_3" data-name="Group 3">
                                <path
                                    id="Path_4"
                                    data-name="Path 4"
                                    d="M988.614,481.9l-8.369-20.244a7.978,7.978,0,0,1,10.26,4.465l2.3,5.714a55.946,55.946,0,0,1,4.057,20.917v6.438a8.216,8.216,0,0,1-8.216,8.216h-7.357a5.027,5.027,0,0,1-5.028-5.028V481.9Z"
                                    transform="translate(-946.498 -461.124)"
                                    fill="#537cfa"
                                />
                                <path
                                    id="Path_5"
                                    data-name="Path 5"
                                    d="M937.645,493.663l-8.369-20.245a7.978,7.978,0,0,1,10.26,4.466l2.3,5.714a55.957,55.957,0,0,1,4.057,20.917v6.438a8.216,8.216,0,0,1-8.216,8.216h-7.357a5.028,5.028,0,0,1-5.028-5.028V493.663Z"
                                    transform="translate(-925.295 -466.017)"
                                    fill="#537cfa"
                                />
                                </g>
                            </svg>
                        </div>
				    )}

			    </div>
                
                <div className="bly-testimonial-info">
                    {
                        testimonialImgURL && (
                            <div className="bly-testimonial-avatar-wrap">
                                <div className="bly-testimonial-image-wrap">
                                    <img className="bly-testimonial-avatar" src={testimonialImgURL} alt="avatar" />

                                </div>
                            </div>
                        )
                    }
                    {
                        testimonialName && (
                            <RichText.Content 
                                tagName="h2"
                                className="bly-testimonial-name"
                                style={ {
                                    color: testimonialTextColor 
                                    ? testimonialTextColor 
                                    : '#32373c',
                                }}
                                value={testimonialName}
                            />
                        )
                    }
                    {
                        testimonialTitle && (
                            <RichText.Content 
                                tagName="small"
                                className="bly-testimonial-title"
                                style={{ 
                                    color:testimonialTextColor 
                                    ? testimonialTextColor
                                    : '#32373c'                                
                                }}
                                value={ testimonialTitle }
                            />

                        )
                    }

                </div>
                
            </Testimonial>
        
        )
    }
}