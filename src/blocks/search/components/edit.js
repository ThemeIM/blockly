import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck 
} from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { searchStyle, backgroudImage, iconImage  } = attributes;
    const removeBackground = () => {
		setAttributes({backgroudImage: ''});
	}
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
		   {(searchStyle == 2) && (
			   <PanelBody title={__('Background', 'blockly')} >
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={ ['image'] }
						onSelect={ ( media ) =>
							//console.log( media.sizes.full.url );
							setAttributes({backgroudImage: media.sizes.full.url})
						}
						render={({open}) => (
							<Button 
							className={backgroudImage ? 'editor-post-featured-image__preview' : 'editor-post-featured-image__toggle' } 
								onClick={open} >
									{backgroudImage ? <div><img src={backgroudImage}/></div> : 'Select Image'}
							</Button>
						)}
					/>
					{backgroudImage && <Button isLink isDestructive onClick={removeBackground}>Remove</Button>}
				</MediaUploadCheck>
		 	 </PanelBody>
		   )}
		   {(searchStyle == 2) && (
			   <PanelBody title={__('Icon', 'blockly')} >
				<MediaUploadCheck>
					<MediaUpload
						allowedTypes={ ['image'] }
						onSelect={ ( media ) =>
							//console.log( media.sizes.full.url );
							setAttributes({iconImage: media.sizes.full.url})
						}
						render={({open}) => (
							<Button 
							className={iconImage ? 'editor-post-featured-image__preview' : 'editor-post-featured-image__toggle' } 
								onClick={open} >
									{iconImage ? <div><img src={iconImage}/></div> : 'Select Image'}
							</Button>
						)}
					/>
					{iconImage && <Button isLink isDestructive onClick={() => setAttributes({iconImage: ''})}>Remove</Button>}
				</MediaUploadCheck>
		 	 </PanelBody>
		   )}
		</InspectorControls>
		<div className='search-wrapper'>
			{(searchStyle == 1) && (
			<div className="widget-box blog-widget-box mb-30">
					<h4 className="widget-title">Search</h4>
					<div className="search-widget-box">
						<form className="search-form">
							<input type="text" name="s" className="form--control" placeholder="Search" autocomplete="off" />
							<button type="submit"><i className="icon-Search"></i></button>
						</form>
					</div>
				</div>
			)}
			{(searchStyle == 2) && (
			<div className="banner-section inner-banner-section">
				{console.log(backgroudImage)}
			
				{backgroudImage && (
					<div className="banner-element">
							<img src={backgroudImage} alt="element" />
					</div>
				)}
			
				<div className="row justify-content-center">
					<div className="col-xl-10">
						<div className="product-category-search-area two">
							<form className="product-search-form">
								<input type="text" className="form--control" placeholder="Search For Knowelduge" autocomplete="off" />
								{iconImage && <button type="submit" className="submit-btn"><img src={iconImage} alt="icon"/></button>}
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