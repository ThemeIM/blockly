import { __ } from "@wordpress/i18n";
import { __experimentalGetSettings } from "@wordpress/date";

import FormContainer from "../../../utils/form/formContainer";
import SettingsImage from "../../../utils/form/SettingsImage";
import SettingsInput from "../../../utils/form/SettingsInput";

export default function Edit({ attributes, setAttributes }) {
    const { title, plans } = attributes;

    const setAttributeByKey = ( key, value ) => setAttributes({ [key] : value })


    /*
    attributes: {
			title: __('Price plan'),
			plans: [
				{
					type: 'Elite',
					details: '1 Month Access to This Products',
					price: 49,
					duration: '3 month',
					cta_text: 'GO PRO',
					cta_url: '/go-pro',
					features: [
						'03 WordPress Theme',
						'02 Code Script',
						'10 HTML + UI Assets'
					]
				}
			]
		}
    */

    return (
        <>
            <FormContainer>
                <div className="row p-3">
                    <div className="col-md-12">
                        <SettingsInput label="Free Items link" value={title} setAttributeValue={setAttributeByKey} attributeName={'title'} />
                        {
                            typeof plans.map === 'function' && plans.map((plan, index) => (
                                <>
                                    <SettingsInput label="Plan Type" value={'plan.title'} setAttributeValue={'setAttributeByKey'} attributeName={'type'} />
                                    <SettingsInput label="Plan Details" value={'plan.title'} setAttributeValue={'setAttributeByKey'} attributeName={'details'} />
                                    <SettingsInput label="Plan Price" value={'plan.price'} setAttributeValue={'setAttributeByKey'} attributeName={'price'} />
                                    <SettingsInput label="Plan Duration" value={'plan.duration'} setAttributeValue={'setAttributeByKey'} attributeName={'duration'} />
                                    <SettingsInput label="Plan Button Text" value={'plan.cta_text'} setAttributeValue={'setAttributeByKey'} attributeName={'cta_text'} />
                                    <SettingsInput label="Plan Button URL" value={'plan.cta_url'} setAttributeValue={'setAttributeByKey'} attributeName={'cta_url'} />
                                </>
                            ))
                        }
                    </div>
                </div>
            </FormContainer>
        </>
    );
}
