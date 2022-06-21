/**
 * BLOCK: Pricing Table
 */

// wordpress dependencies
import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'
import {SelectControl,PanelBody,CheckboxControl} from '@wordpress/components'
import { InspectorControls,RichText,PanelColorSettings } from '@wordpress/block-editor';

//import css 
import './styles/style.scss';
import './styles/editor.scss';


// Available alert types for a dropdown setting.
const all_types = [
	{ value: 'primary', label: 'Primary' },
	{ value: 'secondary', label: 'Secondary' },
	{ value: 'success', label: 'Success' },
	{ value: 'warning', label: 'Warning' },
	{ value: 'danger', label: 'Danger' },
	{ value: 'info', label: 'Info' },
	{ value: 'light', label: 'Light' },
	{ value: 'dark', label: 'Dark' },

];

//register the block alert-box
registerBlockType ( "blockly/alert-box", {
		title: __( 'Alert Box', 'blockly'  ),
		description: __( 'A simple block for alert boxes', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: '#cce5ff',
			foreground: '#004085',
		},
		keywords: [
			__( 'notice', 'blockly' ),
			__( 'message', 'blockly' ),
			__( 'blockly', 'blockly' ),
		],
		example: {
			attributes: {
				content: __( 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.', 'blockly' ),
			},
		},
		
		attributes: {
			alert_type: {
				type: 'string',
				default: 'primary'
			},
			content: {
				type: 'string',
				default:__('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea sequat, vel illum dolore eu feugiat nulla facili','blockly')
			},
			dismiss: {
				type: 'Boolean',
				default: true
			},
			backgroundColor: {
				type: 'string',
				default:'#cce5ff'
			},
			textColor: {
				type: 'string',
				default:'#004085'
			}

		},

        edit: props => {
			const hideAlert = () => hideAlert();
        	const { attributes: { alert_type, content, dismiss, backgroundColor, textColor }, setAttributes } = props;
			const styles = {
				backgroundColor,
			    color:textColor,
				borderColor:backgroundColor
			}
    		return ([
    			<InspectorControls>
    				<PanelBody>
    					<SelectControl
    						label = 'Please select the type of alert you want to display.'
    						options = { all_types } 
  							value = { alert_type }
  							onChange = { alert_type => { setAttributes( { alert_type } ) } }
    					/>
    				</PanelBody>

					<PanelBody>
						<CheckboxControl 
							heading="Please select if the notice should be dismissible."
							label="Dismissible notice?"
							help="Show an 'x' and allow users to close this alert."
							checked={ dismiss }
							onChange={ dismiss => { setAttributes( { dismiss } ) } }
						/>
					</PanelBody>

					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						colorSettings={ [
							{
								value: backgroundColor,
								onChange: ( backgroundColor ) => setAttributes( { backgroundColor } ),
								label: __( 'Background Color' ),
							},
							{
								value: textColor,
								onChange: ( textColor ) => setAttributes( { textColor } ),
								label: __( 'Text Color' ),
							},
						] }
					>
					</PanelColorSettings>
    			</InspectorControls>,
                   
	   			<div className = { "blockly-alert blockly-alert-" + alert_type } role="alert" style={styles}>
					<RichText 
						tagName = "p"
						className = "content"
						value = { content }
						onChange = { ( content ) => setAttributes( { content } ) }
						placeholder = 'Add text...'
						format="string"
					/>
					{ dismiss === true ? <span className="close-admin" aria-hidden="true">&times;</span> : null }
				</div>
    		]);
        },

        save: props => {
			return null;
		}
	},

);
