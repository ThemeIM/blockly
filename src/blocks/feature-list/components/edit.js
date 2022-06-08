import SettingsInput from '../../../utils/form/SettingsInput'
import FormContainer from '../../../utils/form/formContainer'

import { Button, SelectControl, Card, CardBody, __experimentalText as Text, TextControl } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'

export default function Edit({ attributes, setAttributes }) {
    const { item_style, feature_list } = attributes
    const [state, setState] = useState(0);

    const setAttributeByKey = (key, value) => setAttributes({ [key] : value })

    const addTOCItem = () => {
        let new_state = [ ...feature_list, {feature: ''} ]
        setState(state + 1)
        setAttributes({ feature_list: new_state })
    }

    const updateTOCItem = (index, type, data) => {
        let all_feature_items = [ ...feature_list ]
        all_feature_items[index][type] = data
        setState(state + 1)
        return setAttributes({ feature_list: all_feature_items })
    }

    const removeTOCItem = index => {
        let new_state = [ ...feature_list ]
        new_state.splice(index, 1)
        setState(state + 1)
        setAttributes({ feature_list: new_state })
    }

    const blockProps = useBlockProps()

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Feature List</Text>

                <SelectControl>
                    <option>Test 1</option>
                </SelectControl>

                <SelectControl
					label={__('Feature Style', 'blockly')}
					value={ item_style }
					options={ [
						{ label: 'Normal', value: 'normal' },
						{ label: 'Bordered', value: 'bordered' },
					] }
					onChange={ ( item_style ) => setAttributes({ item_style: item_style }) }
					__nextHasNoMarginBottom
				/> 

                {
                    typeof feature_list.map === 'function' && feature_list.map((toc, index) => (
                        <Card key={index}>
                            <CardBody>
                                <TextControl
                                    label={'Feature'}
                                    value={ toc.feature }
                                    onChange={value => updateTOCItem(index, 'feature', value)}
                                />
                            </CardBody>
                        </Card>
                    ))
                }
            </CardBody>
        </Card>
    )
}
