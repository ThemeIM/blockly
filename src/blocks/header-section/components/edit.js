import { __ } from '@wordpress/i18n';
import { Button, SelectControl, Card, CardBody, __experimentalText as Text, TextControl } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'

export default function Edit({ attributes, setAttributes }) {
    const {
        subtitle,
        title,
        subtitle_2,
        subtitle_3,
        customer_text,
    } = attributes

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Header Section</Text>

                <TextControl
                    label={ __("Header subtitle", "blockly") }
                    placeholder={ __("Header subtitle") }
                    type="text"
                    value={subtitle}
                    onChange={(value) => setAttributes({ subtitle: value })}
                />
                <TextControl
                    label={ __("Header title", "blockly") }
                    placeholder={ __("Header title") }
                    type="text"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <TextControl
                    label={ __("Header subtitle 2", "blockly") }
                    placeholder={ __("Header subtitle 2") }
                    type="text"
                    value={subtitle_2}
                    onChange={(value) => setAttributes({ subtitle_2: value })}
                />
                <TextControl
                    label={ __("Header subtitle 3", "blockly") }
                    placeholder={ __("Header subtitle 3", "blockly") }
                    type="text"
                    value={subtitle_3}
                    onChange={(value) => setAttributes({ subtitle_3: value })}
                />
                <RichText
                    tagName="p"
                    className="content"
                    value={ customer_text }
                    onChange={ customer_text => setAttributes({ customer_text }) }
                    label={ __('Customer feedback text', "blockly") }
                    placeholder={ __('Add text...', "blockly") }
                    format="string"
                />
            </CardBody>
        </Card>
    )
}
