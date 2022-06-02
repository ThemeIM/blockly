import { Fragment } from 'react'
import SettingsInput from '../../../utils/form/SettingsInput'
import FormContainer from '../../../utils/form/formContainer'
import { useState } from 'react'
import '../styles/editor.scss'
import '../styles/style.scss'

export default function Edit(props) {
    const { attributes: {
        title,
        description,
        faq_items
    }, setAttributes } = props;
    const [state, setState] = useState([ ...faq_items ]);

    const setAttributeByKey = (key, value) => setAttributes({ [key] : value })

    const addFaqItem = () => {
        let new_state = [ ...state, {question: '', answer: ''} ]
        setState(new_state)
        setAttributes({ faq_items: new_state })
    }

    const updateFaqItem = (index, type, data) => {
        let all_faq_items = [ ...state ]
        all_faq_items[index][type] = data
        setState(all_faq_items)
        return setAttributes({ faq_items: all_faq_items })
    }

    const removeFaqItem = index => {
        let new_state = [ ...faq_items ]
        new_state.splice(index, 1)
        setState(new_state)
        setAttributes({ faq_items: new_state })
    }
 
    return (
        <FormContainer>
            <div className="row p-3">
                <div className="col-md-12">
                    <SettingsInput label="Section Title" value={title} setAttributeValue={setAttributeByKey} attributeName={'title'} />
                    <SettingsInput label="Description" value={description} setAttributeValue={setAttributeByKey} attributeName={'description'} />

                    <div className="mt-3">
                        <h6>FAQ Items</h6>
                    </div>
                    {
                        typeof faq_items.map === 'function' && faq_items.map((single_faq_item, index) => (
                            <div key={index} className="faq-input-item">
                                <button className="btn remove-item" onClick={e => removeFaqItem(index)}>x</button>
                                <div className="form-group setting-input-group" key={index}>
                                    <input type="text"
                                        id={`faq_${index}`}
                                        className="form-control"
                                        value={ single_faq_item['question'] }
                                        onChange={e => updateFaqItem(index, 'question', e.target.value)}
                                    />
                                </div>
                                <div className="form-group setting-input-group" key={index}>
                                    <input type="text"
                                        id={`faq_${index}`}
                                        className="form-control"
                                        value={ single_faq_item['answer'] }
                                        onChange={e => updateFaqItem(index, 'answer', e.target.value)}
                                    />
                                </div>
                            </div>
                        ))
                    }
                    <div className="text-center">
                        <button className="btn btn-primary px-4" onClick={addFaqItem}>Add FAQ</button>
                    </div>
                </div>
            </div>
        </FormContainer>
    )
}
