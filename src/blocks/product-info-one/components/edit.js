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
        info_items,
        secondary_title,
        secondary_description,
    } = attributes

    const updateListItem = (index, text) => {
        let all_info_items = [ ...info_items ];
        all_info_items[index] = text;
        setAttributes({ info_items: all_info_items })
    }

    return (
        <Card>
            <CardBody>
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
                {
                    typeof info_items.map === 'function' && info_items.map((item, index) => (
                        <Card key={index}>
                            <CardBody>
                                <TextControl
                                    label={__("Title", "blockly")}
                                    type="text"
                                    value={title}
                                    onChange={ value => updateListItem(index, value) }
                                />
                            </CardBody>
                        </Card>
                    ))
                }
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
            </CardBody>
        </Card>
    )
}
