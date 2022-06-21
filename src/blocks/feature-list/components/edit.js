import { __ } from '@wordpress/i18n';

import { Button, SelectControl, Card, CardBody, __experimentalText as Text, TextControl } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'

export default function Edit({ attributes, setAttributes }) {
    const { item_style, feature_list } = attributes
    const [state, setState] = useState(0);

    const addFeatureItem = () => {
        let new_state = [ ...feature_list, {feature: ''} ]
        setState(state + 1)
        setAttributes({ feature_list: new_state })
    }

    const updateFeatureItem = (index, type, data) => {
        let all_feature_items = [ ...feature_list ]
        all_feature_items[index][type] = data
        setState(state + 1)
        return setAttributes({ feature_list: all_feature_items })
    }

    const removeFeatureItem = index => {
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

                <div className="feature-list">
                    {
                        typeof feature_list.map === 'function' && feature_list.map((feature, index) => (
                            <div className="feature" key={index}>
                                <TextControl
                                    label={'Feature'}
                                    value={ feature.feature }
                                    onChange={value => updateFeatureItem(index, 'feature', value)}
                                />
                                <Button variant='secondary' onClick={() => removeFeatureItem(index)}>Remove</Button>
                            </div>    
                        ))
                    }
                    <Button variant='secondary' onClick={() => addFeatureItem()}>Add Feature</Button>
                </div>
            </CardBody>
        </Card>
    )
}
