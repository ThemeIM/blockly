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
    const [availableCategories, setAvailableCategories] = useState([])

    const {
        categories,
        products,
    } = attributes 

    const available_posts = useSelect(select => select('core').getEntityRecords('postType', 'product', {per_page: -1}), []);
    const available_categories = useSelect(select => select('core').getEntityRecords('taxonomy', 'product_cat', {per_page: -1}), []);

    if (available_posts && available_posts.length && !availableProducts.length) {
        setAvailableProducts(available_posts ?? [])
    }

    if (available_categories && available_categories.length && !availableCategories.length) {
        setAvailableCategories(available_categories ?? [])
    }

    const getProductOption = products => products && products.map((product) => {
		return { value: product.id, label: product.title?.rendered }
	})

    const getCategoryOption = categories => categories && categories.map((category) => {
		return { value: category.id, label: category.name }
	})

    const animatedComponents = makeAnimated();

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Featured Section</Text>

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
                    onChange={ categories => setAttributes({ categories }) }
                    defaultValue={categories}
                />
                <Select
                    isMulti
                    label={ "Select products" }
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
