/**
 * BLOCK: Pricing Table
 */

// wordpress dependencies
import { __ } from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks'
import {SelectControl,PanelBody,CheckboxControl, Button, IconButton,RangeControl } from '@wordpress/components'
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

//register the block faq
registerBlockType ( "blockly/faq", {
		title: __( 'FAQ', 'blockly'  ),
		description: __( 'A simple block for FAQs', 'blockly' ),
		category: 'blockly',
		icon: {
			src: 'bell',
			background: 'transparent',
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
			faq_contents: {
				type: 'array',
				default: []
			},
			backgroundColor: {
				type: 'string',
				default:'transparent'
			},
			titleBackgroundColor: {
				type: 'string',
				default:'transparent'
			},
			titleTextColor: {
				type: 'string',
				default:'#004085'
			},
			contentBackgroundColor: {
				type: 'string',
				default:'#cce5ff'
			},
			contentTextColor: {
				type: 'string',
				default:'#004085'
			},
			borderRadius: {
				type: 'number',
				default: 0,
			},
			padding: {
				type: 'number',
				default: 2,
			},
			titleBorderRadius: {
				type: 'number',
				default: 0,
			},
			titlePadding: {
				type: 'number',
				default: 2,
			},
			contentBorderRadius: {
				type: 'number',
				default: 0,
			},
			contentPadding: {
				type: 'number',
				default: 2,
			},
		},

        edit: props => {
        	const { attributes: {faq_contents, backgroundColor, textColor, padding,  borderRadius, titleBackgroundColor, titleTextColor, titlePadding,  titleBorderRadius, contentBackgroundColor, contentTextColor, contentPadding,  contentBorderRadius }, setAttributes } = props;
			const styles = {
				backgroundColor,
			    color:textColor,
				borderColor:backgroundColor,
				borderRadius:borderRadius,
				padding:padding
			}
			const titleStyles = {
				backgroundColor:titleBackgroundColor,
			    color:titleTextColor,
				borderColor:titleBackgroundColor,
				borderRadius:titleBorderRadius,
				padding:titlePadding
			}
			const contentStyles = {
				backgroundColor:contentBackgroundColor,
			    color:contentTextColor,
				borderColor:contentBackgroundColor,
				borderRadius:contentBorderRadius,
				padding:contentPadding
			}
			const handleAddFAQContent = () => {
				const faq_contents = [ ...props.attributes.faq_contents ];
				faq_contents.push( {
					faq_title: '',
					faq_content: '',
				} );
				props.setAttributes( { faq_contents } );
			};
	
			const handleRemoveLocation = ( index ) => {
				const faq_contents = [ ...props.attributes.faq_contents ];
				faq_contents.splice( index, 1 );
				props.setAttributes( { faq_contents } );
			};
	
			const handleTitleChange = ( faq_title, index ) => {
				const faq_contents = [ ...props.attributes.faq_contents ];
				faq_contents[ index ].faq_title = faq_title;
				props.setAttributes( { faq_contents } );
			};
			const handleContentChange = ( faq_content, index ) => {
				const faq_contents = [ ...props.attributes.faq_contents ];
				faq_contents[ index ].faq_content = faq_content;
				props.setAttributes( { faq_contents } );
			};
			let faqFields,
			faqDisplay;
			if ( props.attributes.faq_contents.length ) {
				faqFields = props.attributes.faq_contents.map( ( faq, index ) => {
					return <div className = { "blockly-faq" } role="faq" style={styles}>
					<RichText 
						tagName = "h2"
						className = "title"
						value={ props.attributes.faq_contents[ index ].faq_title }
						onChange={ ( faq_title ) => handleTitleChange( faq_title, index ) }
						placeholder = 'Add text...'
						format="string"
						style={titleStyles}
					/>
					<RichText 
						tagName = "p"
						className = "content"
						value={ props.attributes.faq_contents[ index ].faq_content }
						onChange={ ( faq_content ) => handleContentChange( faq_content, index ) }
						placeholder = 'Add text...'
						format="string"
						style={contentStyles}
					/>
					<IconButton
						className="blockly-faq-remove"
						icon="no-alt"
						label="Delete FAQ"
						onClick={ () => handleRemoveLocation( index ) }
					/>
				</div>
			
				} );
			}
    		return ([
    			<InspectorControls>
					<PanelBody title={ __( 'General Settings', 'blockly' ) } initialOpen={ false } >
						<RangeControl
							label={ __('Padding', 'blockly' ) }
							value={ padding }
							onChange={ ( value ) => setAttributes( { padding: value } ) }
							min={ 0 }
							max={ 10 }
							step={ 1 }
						/>
						<RangeControl
							label={ __( 'Border Radius', 'blockly') }
							value={ borderRadius }
							onChange={ ( value ) =>  setAttributes( { borderRadius: value,} ) }
							min={ 0 }
							max={ 20 }
							step={ 1 }
						/>
						<PanelColorSettings
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									value: backgroundColor,
									onChange: ( backgroundColor ) => setAttributes( { backgroundColor } ),
									label: __( 'Background Color' ),
								}
							] }
						>  
						</PanelColorSettings>
					</PanelBody>
					<PanelBody title={ __( 'Title Settings', 'blockly' ) } initialOpen={ false } >
						<RangeControl
							label={ __('Padding', 'blockly' ) }
							value={ titlePadding }
							onChange={ ( value ) => setAttributes( { titlePadding: value } ) }
							min={ 0 }
							max={ 10 }
							step={ 1 }
						/>
						<RangeControl
							label={ __( 'Border Radius', 'blockly') }
							value={ titleBorderRadius }
							onChange={ ( value ) =>  setAttributes( { titleBorderRadius: value,} ) }
							min={ 0 }
							max={ 20 }
							step={ 1 }
						/>
						<PanelColorSettings
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									value: titleBackgroundColor,
									onChange: ( titleBackgroundColor ) => setAttributes( { titleBackgroundColor } ),
									label: __( 'Background Color' ),
								},
								{
									value: titleTextColor,
									onChange: ( titleTextColor ) => setAttributes( { titleTextColor } ),
									label: __( 'Text Color' ),
								},
							] }
						>  
						</PanelColorSettings>
					</PanelBody>
					<PanelBody title={ __( 'Content Settings', 'blockly' ) } initialOpen={ false } >
						<RangeControl
							label={ __('Padding', 'blockly' ) }
							value={ contentPadding }
							onChange={ ( value ) => setAttributes( { contentPadding: value } ) }
							min={ 0 }
							max={ 10 }
							step={ 1 }
						/>
						<RangeControl
							label={ __( 'Border Radius', 'blockly') }
							value={ contentBorderRadius }
							onChange={ ( value ) =>  setAttributes( { contentBorderRadius: value,} ) }
							min={ 0 }
							max={ 20 }
							step={ 1 }
						/>
						<PanelColorSettings
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									value: contentBackgroundColor,
									onChange: ( contentBackgroundColor ) => setAttributes( { contentBackgroundColor } ),
									label: __( 'Background Color' ),
								},
								{
									value: contentTextColor,
									onChange: ( contentTextColor ) => setAttributes( { contentTextColor } ),
									label: __( 'Text Color' ),
								},
							] }
						>  
						</PanelColorSettings>
					</PanelBody>
    			</InspectorControls>,
                   
	   			<div className = { "blockly-faq" } role="faq" style={styles}>
					   	{ faqFields }
					<Button
						isDefault
						onClick={ handleAddFAQContent.bind( this ) }
					>
						{ __( 'Add Item' ) }
					</Button>
				</div>
    		]);
        },

        save: props => {
			return null;
		}
	},

);
