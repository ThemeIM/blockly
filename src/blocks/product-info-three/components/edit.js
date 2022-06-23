import { __ } from '@wordpress/i18n';
import { Button, Card, CardBody, __experimentalText as Text, TextControl, Dashicon } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'


export default function Edit({ attributes, setAttributes }) {
    const { 
        title,
        description,
        info_items,
    } = attributes

    const updateListItem = (index, type, text) => {
        let all_info_items = [ ...info_items ];
        all_info_items[index][type] = text;
        setAttributes({ info_items: all_info_items })
    }

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Product Info Three</Text>
                <TextControl
                    label={__("Title", "blockly")}
                    type="text"
                    value={title}
                    onChange={ value => setAttributes({ title: value }) }
                />
                <TextControl
                    label={__("Description", "blockly")}
                    type="text"
                    value={description}
                    onChange={ value => setAttributes({ description: value }) }
                />

                <Card style={{ marginTop: '15px', marginBottom: '15px' }}>
                    <CardBody>
                        <Text isBlock adjustLineHeightForInnerControls size="medium" style={{ marginBottom: '10px' }}>Info Items</Text>
                        {
                            typeof info_items.map === 'function' && info_items.map((item, index) => (
                                <Card>
                                    <CardBody>
                                        <TextControl
                                            label={__("Title", "blockly")}
                                            type="text"
                                            value={item.title}
                                            onChange={ value => updateListItem(index, 'title', value) }
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
                         <Button style={{ marginTop: '15px' }} variant='secondary' onClick={() => addListItem()}>Add Item</Button>
                    </CardBody>
                </Card>

            </CardBody>
        </Card>
    )
}
