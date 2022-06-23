import { __ } from '@wordpress/i18n';
import { SelectControl, Card, CardBody, __experimentalText as Text, TextControl } from '@wordpress/components';
import '../styles/editor.scss'
import '../styles/style.scss'

export default function Edit({ attributes, setAttributes }) {
    const { items } = attributes

    const style_types = [
        { value: 'green', label: 'Green' },
        { value: 'red', label: 'Red' },
    ];

    const updateListItem = (index, type, text) => {
        let all_items = [ ...items ];
        all_items[index]['type'] = text;
        setAttributes({ items: all_items })
    }

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Terms and Conditions</Text>

                {
                    typeof items.map === 'function' && items.map((item, index) => (
                        <Card key={index}>
                            <CardBody>
                                <SelectControl
                                    label = 'Select style'
                                    options = { style_types } 
                                    value = { item.style }
                                    onChange = { value => updateListItem(index, 'style', value) }
                                />
                                <TextControl
                                    label={__("Title", "blockly")}
                                    type="text"
                                    value={item.title}
                                    onChange = { value => updateListItem(index, 'title', value) }
                                />
                                <TextControl
                                    label={__("Description", "blockly")}
                                    type="text"
                                    value={item.description}
                                    onChange={ value => updateListItem(index, 'description', value) }
                                />
                            </CardBody>
                        </Card>
                    ))
                }
            </CardBody>
        </Card>
    )
}
