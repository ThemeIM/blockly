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
        image,
    } = attributes

    const updateListItem = (index, text) => {
        let all_info_items = [ ...info_items ];
        all_info_items[index] = text;
        setAttributes({ info_items: all_info_items })
    }

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Product Info Five</Text>
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
                {
                    image && 
                    <div className="img-fluid">
                        <img src={image} alt="" />
                    </div>
                }
                <MediaPlaceholder
                    onSelect={(image) => setAttributes({ image: image.url }) }
                    onSelectURL={(url) => setAttributes({ image: url }) }
                    allowedTypes={["image"]}
                    multiple={false}
                    labels={ 'Info icon image' }
                />
            </CardBody>
        </Card>
    )
}
