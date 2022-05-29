import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import icons from './../../../utils/components/icons';
import { Dashicon } from '@wordpress/components';

export default class SocialIcons extends Component {

    render(){

        const { profileLinkColor }=this.props.attributes;
        const svgStyle={
            fill: profileLinkColor
        }
        
        return(
            <ul className="bly-social-links">

                { this.props.attributes.facebook &&
                    !! this.props.attributes.facebook.length && (
                    <li>
                        <a href={ this.props.attributes.facebook } target="_blank" rel="noopener noreferrer">
                            { __( 'Facebook', 'blockly' ) }
                            <i className="facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="7.357" height="13.736" viewBox="0 0 7.357 13.736">
                                    <path style={svgStyle} id="facebook-icon" d="M242.375,1260.89l.381-2.486h-2.385v-1.613a1.243,1.243,0,0,1,1.4-1.343h1.084v-2.117a13.212,13.212,0,0,0-1.925-.168,3.035,3.035,0,0,0-3.248,3.346v1.9H235.5v2.486h2.184v6.009h2.687v-6.009Z" transform="translate(-235.5 -1253.163)" />
                                </svg>
                            </i>
                        </a>
                    </li>
                ) }

                { this.props.attributes.instagram &&
                    !! this.props.attributes.instagram.length && (
                    <li>
                        <a href={ this.props.attributes.instagram } target="_blank" rel="noopener noreferrer">
                            { __( 'Instagram', 'blockly' ) }
                            <i className="instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.736" height="13.736" viewBox="0 0 13.736 13.736">
                                <g id="instagram-icon" transform="translate(-265.645 -1253.006)">
                                <g id="Group_103" data-name="Group 103">
                                    <path style={svgStyle} id="Path_67" data-name="Path 67" d="M276.149,1255.458a.805.805,0,1,0,.806.806A.806.806,0,0,0,276.149,1255.458Z" />
                                    <path style={svgStyle} id="Path_68" data-name="Path 68" d="M272.569,1256.491a3.383,3.383,0,1,0,3.383,3.383A3.387,3.387,0,0,0,272.569,1256.491Zm0,5.55a2.167,2.167,0,1,1,2.167-2.167A2.169,2.169,0,0,1,272.569,1262.041Z" />
                                    <path style={svgStyle} id="Path_69" data-name="Path 69" d="M275.255,1266.742h-5.484a4.131,4.131,0,0,1-4.126-4.126v-5.484a4.131,4.131,0,0,1,4.126-4.126h5.484a4.131,4.131,0,0,1,4.126,4.126v5.484A4.131,4.131,0,0,1,275.255,1266.742Zm-5.484-12.444a2.837,2.837,0,0,0-2.834,2.834v5.484a2.837,2.837,0,0,0,2.834,2.833h5.484a2.837,2.837,0,0,0,2.834-2.833v-5.484a2.837,2.837,0,0,0-2.834-2.834Z" />
                                </g>
                                </g>
                            </svg>
                            </i>
                        </a>
                    </li>
                ) }

                { this.props.attributes.twitter &&
                    !! this.props.attributes.twitter.length && (
                    <li>
                        <a href={ this.props.attributes.twitter } target="_blank" rel="noopener noreferrer">
                            { __( 'Twitter', 'blockly' ) }
                            <i className="twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.689" height="13.736" viewBox="0 0 16.689 13.736">
                                    <path style={svgStyle} id="twitter-icon" d="M314.123,1254.883a6.878,6.878,0,0,1-1.688.481c.272-.046.67-.537.83-.736a3.091,3.091,0,0,0,.56-1.021c.015-.029.026-.066,0-.088a.1.1,0,0,0-.09.008,8.57,8.57,0,0,1-2,.765.134.134,0,0,1-.138-.036,1.563,1.563,0,0,0-.175-.179,3.555,3.555,0,0,0-.969-.594,3.39,3.39,0,0,0-1.487-.24,3.553,3.553,0,0,0-1.41.4,3.638,3.638,0,0,0-1.138.929,3.512,3.512,0,0,0-.68,1.361,3.7,3.7,0,0,0-.036,1.437c.011.08,0,.091-.069.08a10.685,10.685,0,0,1-6.875-3.5c-.081-.092-.124-.092-.19.007a3.484,3.484,0,0,0,.594,4.119c.135.128.274.255.423.372a3.515,3.515,0,0,1-1.327-.372c-.08-.051-.121-.022-.128.07a2.122,2.122,0,0,0,.022.393,3.526,3.526,0,0,0,2.173,2.811,2.065,2.065,0,0,0,.441.135,3.93,3.93,0,0,1-1.3.04c-.1-.018-.131.03-.1.121a3.658,3.658,0,0,0,2.734,2.289c.124.022.248.022.372.051-.007.011-.015.011-.022.022a4.327,4.327,0,0,1-1.867.989,6.672,6.672,0,0,1-2.836.363c-.152-.022-.184-.02-.226,0s-.005.063.044.1c.193.128.39.241.591.35a9.317,9.317,0,0,0,1.895.759,10.1,10.1,0,0,0,9.8-2.292,10.285,10.285,0,0,0,2.713-7.5c0-.108.127-.168.2-.225a6.6,6.6,0,0,0,1.334-1.387.421.421,0,0,0,.089-.266v-.014C314.192,1254.839,314.191,1254.852,314.123,1254.883Z" transform="translate(-297.503 -1253.236)"/>
                                </svg>
                            </i>
                        </a>
                    </li>
                ) }

                { this.props.attributes.pinterest &&
                    !! this.props.attributes.pinterest.length && (
                    <li>
                        <a href={ this.props.attributes.pinterest } target="_blank" rel="noopener noreferrer">
                            { __( 'Pinterest', 'blockly' ) }
                            <i className="pinterest">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10.637" height="13.737" viewBox="0 0 10.637 13.737">
                                    <path style={svgStyle} id="pinterest-icon" d="M338.311,1262.039c-.012.039-.022.073-.031.106a11.542,11.542,0,0,1-1.079,3.334,10.2,10.2,0,0,1-.834,1.245c-.035.045-.067.1-.137.089s-.082-.085-.09-.146a10.627,10.627,0,0,1-.109-1.809c.026-.79.124-1.061,1.143-5.344a.3.3,0,0,0-.024-.178,3.011,3.011,0,0,1-.079-2c.461-1.46,2.117-1.572,2.406-.367.179.745-.293,1.721-.655,3.163-.3,1.189,1.1,2.035,2.3,1.167,1.1-.8,1.532-2.72,1.451-4.081-.161-2.712-3.135-3.3-5.022-2.425-2.163,1-2.655,3.682-1.678,4.907.124.156.219.251.178.409-.063.246-.118.493-.186.737a.26.26,0,0,1-.386.173,2.205,2.205,0,0,1-.9-.677,4.278,4.278,0,0,1,.03-4.778,5.742,5.742,0,0,1,5.538-2.443,4.692,4.692,0,0,1,4.314,3.875,6.45,6.45,0,0,1-1.184,4.532c-1.406,1.743-3.684,1.859-4.735.789C338.455,1262.233,338.39,1262.137,338.311,1262.039Z" transform="translate(-333.863 -1253.079)"  fill-rule="evenodd"/>
                                </svg>
                            </i>
                        </a>
                    </li>
                ) }

            </ul>
        )
    }
}