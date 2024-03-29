import {
	InspectorControls,
	InnerBlocks, 
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { PanelBody, Button, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { background_image, show_media, background_color } = attributes;
	const onSelectBg = (newImage) => {
		setAttributes({ background_image: newImage.sizes.full.url, show_media: false})
	}
	const onChangeColor = (newColor) => {
		setAttributes({ background_color: newColor})
	}
	const onChangeBgChange = () => {
		setAttributes({ show_media: true})
	}
	const onClickRemoveBg = () => {
		setAttributes({ background_image: '', show_media: true})
	}

	return (
		<>
		<InspectorControls>
				<PanelBody title="Background Settings">
					{show_media && 
					<MediaPlaceholder
					    onSelect = {onSelectBg}
						allowedTypes = { [ 'image' ] }
						multiple = { false }
						labels = { { title: 'The Image' } }
						
					/>}
					{background_image && <img src={background_image} />}
					{background_image && <div>
						<Button title='Change Background Image' className='btn is-primary' onClick={onChangeBgChange}>{__('Change', 'blockly')}</Button>
						<Button title='Change Background Image' className='btn is-primary' onClick={onClickRemoveBg}>{__('Remove', 'blockly')}</Button>
					</div>}
				</PanelBody>
			</InspectorControls>
		<div className='Editor'>
			{background_image && <div className='bg-image'><img src={background_image} /></div>}
		    <div className='container'>
			  <InnerBlocks />
			</div>
		</div>
		</>
	);
}