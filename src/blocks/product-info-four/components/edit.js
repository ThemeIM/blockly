import { __ } from '@wordpress/i18n';
import { Button, Card, CardBody, __experimentalText as Text, TextControl, Dashicon } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'


export default function Edit({ attributes, setAttributes }) {
    const { 
        main_title,
        main_description,
        secondary_title,
        secondary_description,
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
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Product Info Four</Text>
                <TextControl
                    label={__("Main Title", "blockly")}
                    type="text"
                    value={main_title}
                    onChange={ value => setAttributes({ main_title: value }) }
                />
                <TextControl
                    label={__("Main Description", "blockly")}
                    type="text"
                    value={main_description}
                    onChange={ value => setAttributes({ main_description: value }) }
                />
                <TextControl
                    label={__("Secondary Title", "blockly")}
                    type="text"
                    value={secondary_title}
                    onChange={ value => setAttributes({ secondary_title: value }) }
                />
                <TextControl
                    label={__("Secondary Description", "blockly")}
                    type="text"
                    value={secondary_description}
                    onChange={ value => setAttributes({ secondary_description: value }) }
                />
                {
                    typeof info_items.map === 'function' && info_items.map((item, index) => (
                        <Card>
                            <CardBody>
                                {
                                    item.icon && 
                                    <div className="img-fluid">
                                        <img src={item.icon} alt="" />
                                    </div>
                                }
                                <MediaPlaceholder
                                    onSelect={(image) => updateListItem(index, 'icon', image.url) }
                                    onSelectURL={(url) => updateListItem(index, 'icon', url) }
                                    allowedTypes={["image"]}
                                    multiple={false}
                                    labels={ 'Icon image' }
                                />
                                <TextControl
                                    label={__("Title", "blockly")}
                                    type="text"
                                    value={item.text}
                                    onChange={ value => updateListItem(index, 'text', value) }
                                />
                            </CardBody>
                        </Card>
                    ))
                }
            </CardBody>
        </Card>
    )
}
