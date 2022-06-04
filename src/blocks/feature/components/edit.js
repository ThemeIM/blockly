import { useState } from 'react'
import { MediaPlaceholder } from '@wordpress/block-editor';
import FormContainer from '../../../utils/form/formContainer'
import RepeaterContainer from '../../../utils/form/repeaterContainer'
import { Fragment } from 'react'

export default function Edit({ attributes, setAttributes }) {
    const { items } = attributes

    const [features, setFeatures] = useState([ ...items ])

    const addFeatureItem = () => {
        setFeatures([ ...items, {icon_image: '', info: '24x7 Hours Instant Support'} ])
        setAttributes({
            items: [
                ...items,
                {
                    icon_image: '',
                    info: '',
                }
            ]
        })
    }
 
    const updateFeatureItem = (index, type, data) => {
        let all_items = [ ...features ]
        all_items[index][type] = data
        setFeatures(all_items)
        return setAttributes({ items: all_items })
    }

    const deleteItem = index => {
        let all_items = [ ...features ]
        all_items.splice(index, 1)
        setFeatures(all_items)
        return setAttributes({ items: all_items })
    }

    return (
        <FormContainer>
            <div className="row p-3">
                {
                    typeof items.map === 'function' && items.map((feature, index) => (
                        <div className="faq-input-item" key={index}>
                            <button className="btn remove-item" onClick={e => deleteItem(index)}>x</button>
                            <div className="form-group setting-input-group">
                                <input type="text"
                                    id={`feature_${index}`}
                                    className="form-control"
                                    value={ feature.info }
                                    onChange={e => updateFeatureItem(index, 'info', e.target.value)}
                                />
                            </div>
                            {
                                feature.icon_image && 
                                <div className="img-fluid">
                                    <img src={feature.icon_image} alt="" />
                                </div>
                            }
                            <MediaPlaceholder
                                onSelect={(image) => updateFeatureItem(index, 'icon_image', image.url) }
                                onSelectURL={(url) => updateFeatureItem(index, 'icon_image', url) }
                                allowedTypes={["image"]}
                                multiple={false}
                                labels={ 'Info icon image' }
                            />
                        </div>
                    ))
                }
                <div className="text-center">
                    <button className="btn btn-primary px-5 btn-style-1" onClick={addFeatureItem}>Add Feature</button>
                </div>
            </div>
        </FormContainer>
    )
}
