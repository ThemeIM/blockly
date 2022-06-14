import { __ } from '@wordpress/i18n';

import { Button, SelectControl, Card, CardBody, __experimentalText as Text, TextControl, PanelBody } from '@wordpress/components';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls  } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import { useEffect, useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'

export default function Edit({ attributes, setAttributes }) {
    const [availableProducts, setAvailableProducts] = useState([])
    const {
        title,
        subtitle,
        products,
        backgroudImage
    } = attributes

    const animatedComponents = makeAnimated();

    const getProductOption = products => products && products.map((product) => {
		return { value: product.id, label: product.title?.rendered }
	})

    const available_posts = useSelect(select => select('core').getEntityRecords('postType', 'product', {}), []);

    if (available_posts && available_posts.length && !availableProducts.length) {
        setAvailableProducts(available_posts ?? [])
    }
    const removeBackground = () => {
		setAttributes({backgroudImage: ''});
	}
    return (
        <>
        <InspectorControls>
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
		</InspectorControls>
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Trending Section</Text>

                <TextControl
                    label={ __("title", "blockly") }
                    placeholder={ __("title") }
                    type="text"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <TextControl
                    label={ __("subtitle", "blockly") }
                    placeholder={ __("subtitle") }
                    type="text"
                    value={subtitle}
                    onChange={(value) => setAttributes({ subtitle: value })}
                />
                <Select
                    isMulti
                    name="tags"
                    isClearable={true}
                    isSearchable={true}
                    isLoading={!availableProducts || availableProducts.length == 0}
                    isDisabled={!availableProducts || availableProducts.length == 0}
                    options={getProductOption(availableProducts)}
                    components={animatedComponents}
                    onChange={ products => setAttributes({ products }) }
                    defaultValue={products}
                />
            </CardBody>
        </Card>
        </>
    )
}
