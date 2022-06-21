import { __ } from "@wordpress/i18n";
import { __experimentalGetSettings } from "@wordpress/date";

import FormContainer from "../../../utils/form/formContainer";
import SettingsImage from "../../../utils/form/SettingsImage";
import SettingsInput from "../../../utils/form/SettingsInput";

export default function Edit({ attributes, setAttributes }) {
    const { title, subtitle, image } = attributes;

    const setAttributeByKey = ( key, value ) => setAttributes({ [key] : value })

    return (
        <>
            <FormContainer>
                <div className="row p-3">
                    <div className="col-md-12">
                        <SettingsInput label="Title" value={title} setAttributeValue={setAttributeByKey} attributeName={'title'} />
                        <SettingsInput label="Subtitle" value={subtitle} setAttributeValue={setAttributeByKey} attributeName={'subtitle'} />
                        <SettingsImage
                            image_url={image}
                            title={title}
                            state_key={'image'}
                            valueSetter={setAttributeByKey}
                        />
                    </div>
                </div>
            </FormContainer>
        </>
    );
}

