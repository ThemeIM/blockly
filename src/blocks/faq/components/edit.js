import { Fragment } from 'react'
import SettingsInput from '../../../utils/form/SettingsInput'
import FormContainer from '../../../utils/form/formContainer'

export default function Edit(props) {
    const { attributes: {
        title,
        description,
        faq_items
    }, setAttributes } = props;

    const setAttributeByKey = (key, value) => setAttributes({ [key] : value })
    const addFaqItem = () => {

        console.log('===[ adding... ]===');
        typeof faq_items.map === 'function' && faq_items.map((faq_item, index) => 
            console.log({ faq_item, index })
        )

        setAttributes({
            faq_items: [ ...faq_items, {question: '', answer: ''}]
        })
    }

    const updateFaqItem = (index, type, data) => {
        let all_faq_items = faq_items
        item[index][type] = data
        return setAttributes({ faq_items: all_faq_items })
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
                        typeof faq_items.map === 'function' && faq_items.map((faq_item, index) => (
                            <div key={index} className>
                                <div className="form-group setting-input-group" key={index}>
                                    <input type="text"
                                        id={`faq_${index}`}
                                        className="form-control"
                                        value={ faq_item.question }
                                        onChange={e => updateFaqItem(index, 'question', e.target.value)}
                                    />
                                </div>
                                <div className="form-group setting-input-group" key={index}>
                                    <input type="text"
                                        id={`faq_${index}`}
                                        className="form-control"
                                        value={ faq_item.question }
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
