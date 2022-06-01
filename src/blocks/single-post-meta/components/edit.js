import {
	InspectorControls,
	MediaPlaceholder,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';
import { PanelBody, Button, TextControl, QueryControls, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { format, dateI18n, __experimentalGetSettings } from '@wordpress/date';
import { useState } from '@wordpress/element';

export default function Edit( { attributes, setAttributes } ) {
	const { showAuthor, swhowpostDate, showpostCat, swhoReadingTime} = attributes;


	return (
		<>
		<InspectorControls>
			<PanelBody title={__('Display Settings', 'blockly')} >
				<ToggleControl 
				   label = {__('Show Author', 'blockly')}
				   checked={ showAuthor }
				   onChange={ (  ) => {setAttributes({showAuthor: !showAuthor})} }
				/>
				<div>
				<ToggleControl 
				   label = {__('Show data', 'blockly')}
				   checked={ swhowpostDate }
				   onChange={ (  ) => {setAttributes({swhowpostDate: !swhowpostDate})} }
				/>
				</div>
				<div>
				<ToggleControl 
				   label = {__('Show Category', 'blockly')}
				   checked={ showpostCat }
				   onChange={ (  ) => {setAttributes({showpostCat: !showpostCat})} }
				/>
				<ToggleControl 
				   label = {__('Show Reading Time', 'blockly')}
				   checked={ swhoReadingTime }
				   onChange={ (  ) => {setAttributes({swhoReadingTime: !swhoReadingTime})} }
				/>
				</div>
			</PanelBody>
		</InspectorControls>
		<div className='Editor'>
		    <>
			  <div className="auther-meta">
				  <ul className='author-meta-list'> 
				     {showAuthor && <li>{__('Auther Name', 'blockly')}</li>}
				     {swhowpostDate && <li>{__('Post Date', 'blockly')}</li>}
				     {showpostCat && <li>{__('Post Cat', 'blockly')}</li>}
				     {swhoReadingTime && <li>{__('Reading Time', 'blockly')}</li>}
				  </ul>
			  </div>
			</>
		</div>
		</>
	);
}