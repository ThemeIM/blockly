import {
	InspectorControls,
	InnerBlocks, 
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { PanelBody, Button, __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import { useSelect } from '@wordpress/data';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

export default function Edit( { attributes, setAttributes } ) {
	const { background_image, show_media, background_color, selected_categories } = attributes;
    const [availableCategories, setAvailableCategories] = useState([])

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

    const animatedComponents = makeAnimated();

    const available_categories = useSelect(select => select('core').getEntityRecords('taxonomy', 'product_cat', {}), []);

	if (available_categories && available_categories.length && !availableCategories.length) {
        setAvailableCategories(available_categories ?? [])
    }

	const getCategoryOption = categories => categories && categories.map((category) => {
		return { value: category.id, label: category.name }
	})

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
		<div className='Editor product-list'>
			 <p>Product Page display Page</p>
			 <Select
				isMulti
				label={ "Select categories" }
				name="tags"
				isClearable={true}
				isSearchable={true}
				isLoading={!availableCategories || availableCategories.length == 0}
				isDisabled={!availableCategories || availableCategories.length == 0}
				options={getCategoryOption(availableCategories)}
				components={animatedComponents}
				onChange={ categories => setAttributes({ selected_categories: categories }) }
				defaultValue={selected_categories}
			/>
		</div>
		</>
	);
}
