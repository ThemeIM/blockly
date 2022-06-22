import { __ } from '@wordpress/i18n';
import { Button, Card, CardBody, __experimentalText as Text, TextControl, Dashicon } from '@wordpress/components';

import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'

export default function Edit({ attributes, setAttributes }) {
    const { 
        main_title,
        main_description,
        secondary_title_1,
        secondary_description_1,
        secondary_title_2,
        secondary_description_2,
    } = attributes

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Product Info Six</Text>

                <TextControl
                    label={__("Main Title", "blockly")}
                    type="text"
                    value={main_title}
                    onChange={ value => setAttributes({ main_title: value }) }
                />
                <TextControl
                    label={__("Main Title", "blockly")}
                    type="text"
                    value={main_description}
                    onChange={ value => setAttributes({ main_description: value }) }
                />
                <TextControl
                    label={__("Secondary Title -1", "blockly")}
                    type="text"
                    value={secondary_title_1}
                    onChange={ value => setAttributes({ secondary_title_1: value }) }
                />
                <TextControl
                    label={__("Secondary Description -1", "blockly")}
                    type="text"
                    value={secondary_description_1}
                    onChange={ value => setAttributes({ secondary_description_1: value }) }
                />
                <TextControl
                    label={__("Secondary Title - 2", "blockly")}
                    type="text"
                    value={secondary_title_2}
                    onChange={ value => setAttributes({ secondary_title_2: value }) }
                />
                <TextControl
                    label={__("Secondary Description - 2", "blockly")}
                    type="text"
                    value={secondary_description_2}
                    onChange={ value => setAttributes({ secondary_description_2: value }) }
                />
            </CardBody>
        </Card>
    )
}
