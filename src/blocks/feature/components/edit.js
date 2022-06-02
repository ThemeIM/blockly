import { useState } from 'react'

import SettingsInput from '../../../utils/form/SettingsInput'
import FormContainer from '../../../utils/form/formContainer'

export default function Edit({ attributes, setAttributes }) {
    const { items } = attributes

    const [features, setFeatures] = useState([ ...items ])

    const setAttributeByKey = (key, value) => setAttributes({ [key] : value })
    const addFaqItem = () => setAttributes({
        faq_items: [ ...faq_items, {question: '', answer: ''}]
    })

    const updateFaqItem = (index, type, data) => {
        let all_faq_items = faq_items
        item[index][type] = data
        return setAttributes({ faq_items: all_faq_items })
    }

    return (
        <FormContainer>
            <div className="row p-3">
                {
                    typeof features.map === 'function' && features.map((feature, index) => (
                        <div className="col-md-4">
                            <div className="form-group setting-input-group">
                                <label htmlFor={`feature_${index}`}>Info</label>
                                <input type="text"
                                    id={`feature_${index}`}
                                    className="form-control"
                                    value={ feature.info }
                                    onChange={e => updateFaqItem(index, 'info', e.target.value)}
                                />
                            </div>
                            {
                                feature.icon_image && 
                                <div className="img-fluid">
                                    <img src={feature.icon_image} alt="" />
                                </div>
                            }
                            <MediaPlaceholder
                                onSelect={(image) => updateFaqItem(index, 'icon_image', image.url) }
                                onSelectURL={(url) => updateFaqItem(index, 'icon_image', url) }
                                allowedTypes={["image"]}
                                multiple={false}
                                labels={ 'Info icon image' }
                            />
                        </div>
                    ))
                }
                <div className="text-center">
                    <button className="btn btn-primary px-4" onClick={addFaqItem}>Add FAQ</button>
                </div>
            </div>
        </FormContainer>
    )
}
