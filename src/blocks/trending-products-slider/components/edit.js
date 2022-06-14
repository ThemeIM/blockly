import { __ } from '@wordpress/i18n';

import { Button, SelectControl, Card, CardBody, __experimentalText as Text, TextControl } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';
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
    } = attributes

    const animatedComponents = makeAnimated();

    const getProductOption = products => products && products.map((product) => {
		return { value: product.id, label: product.title?.rendered }
	})

    const available_posts = useSelect(select => select('core').getEntityRecords('postType', 'product', {}), []);

    if (available_posts && available_posts.length && !availableProducts.length) {
        setAvailableProducts(available_posts ?? [])
    }

    return (
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
    )
}
