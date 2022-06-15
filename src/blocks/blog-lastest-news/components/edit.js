import {
    InspectorControls,
    MediaPlaceholder,
    __experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import {
    PanelBody,
    Button,
    Card,
    CardBody,
    TextControl,
    QueryControls,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { RawHTML, useEffect } from "@wordpress/element";
import { format, dateI18n, __experimentalGetSettings } from "@wordpress/date";

export default function Edit({ attributes, setAttributes }) {
    const { title, subtitle, numberOfPosts } = attributes;

    return (
        <Card>
            <CardBody>
                <h4>Blog section</h4>

                <TextControl
                    label={__("Section title", "blockly")}
                    placeholder={"Section title"}
                    type="text"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                />
                <TextControl
                    label={__("Section subtitle", "blockly")}
                    placeholder={"Section subtitle"}
                    type="text"
                    value={subtitle}
                    onChange={(value) => setAttributes({ subtitle: value })}
                />
                <TextControl
                    label={__("Number of posts", "blockly")}
                    placeholder={"Number of posts"}
                    type="number"
                    value={numberOfPosts}
                    onChange={(value) => setAttributes({ numberOfPosts: value })}
                />
            </CardBody>
        </Card>
    );
}