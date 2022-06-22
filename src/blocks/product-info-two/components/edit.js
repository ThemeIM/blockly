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
        button_title,
        button_link,
    } = attributes

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
                <TextControl
                    label={__("Button Title", "blockly")}
                    type="text"
                    value={button_title}
                    onChange={ value => setAttributes({ button_title: value }) }
                />
                <TextControl
                    label={__("Button Link", "blockly")}
                    type="text"
                    value={button_link}
                    onChange={ value => setAttributes({ button_link: value }) }
                />
            </CardBody>
        </Card>
    )
}
