import {
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function Edit( { attributes, setAttributes } ) {
	const { searchStyle } = attributes;

	return (
		<>
		<InspectorControls>
		   <PanelBody title={__('Search Style', 'blockly')} >
				<SelectControl
					label={__('Style', 'blockly')}
					value={ searchStyle }
					options={ [
						{ label: 'Style 1', value: '1' },
						{ label: 'Style 2', value: '2' },
					] }
					onChange={ ( searchStyle ) => setAttributes({searchStyle}) }
					__nextHasNoMarginBottom
				/> 
		   </PanelBody>
		</InspectorControls>
		<div className='search-wrapper'>
			{(searchStyle == 1) && (
			<div class="widget-box blog-widget-box mb-30">
					<h4 class="widget-title">Search</h4>
					<div class="search-widget-box">
						<form class="search-form">
							<input type="text" name="s" class="form--control" placeholder="Search" autocomplete="off" />
							<button type="submit"><i class="icon-Search"></i></button>
						</form>
					</div>
				</div>
			)}
			{(searchStyle == 2) && (
			<div class="banner-section inner-banner-section">
			<div class="banner-element">
				<img src="assets/images/element/element-5.png" alt="element" />
			</div>
				<div class="row justify-content-center">
					<div class="col-xl-10">
						<div class="product-category-search-area two">
							<form class="product-search-form">
								<input type="text" class="form--control" placeholder="Search For Knowelduge" autocomplete="off" />
								<button type="submit" class="submit-btn"><img src="assets/images/icon/icon-11.png" alt="icon"/></button>
							</form>
						</div>
					</div>
				</div>
		</div>
			)}
		</div>
		
		</>
	);
}