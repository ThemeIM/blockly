import { __ } from "@wordpress/i18n";
import { __experimentalGetSettings } from "@wordpress/date";
import { Card, CardBody, __experimentalText as Text } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { title, tip } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <Card>
                <CardBody>
                    <RichText
                        { ...blockProps }
                        tagName="h4"
                        value={ title }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        onChange={ ( content ) => setAttributes({ title: content }) }
                        placeholder={ __( 'Title' ) }
                    />
                    <RichText
                        { ...blockProps }
                        tagName="p"
                        value={ tip }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        onChange={ ( content ) => setAttributes({ tip: content }) }
                        placeholder={ __( 'Tip' ) }
                    />
                </CardBody>
            </Card>
        </>
    );
}
