import { __ } from "@wordpress/i18n";
import { __experimentalGetSettings } from "@wordpress/date";
import { Card, CardBody, __experimentalText as Text } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
    const { quote, cite } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <Card>
                <CardBody>
                    <RichText
                        { ...blockProps }
                        tagName="h4"
                        value={ quote }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        onChange={ ( content ) => setAttributes({ quote: content }) }
                        placeholder={ __( 'Quote' ) }
                    />
                    <RichText
                        { ...blockProps }
                        tagName="p"
                        value={ cite }
                        allowedFormats={ [ 'core/bold', 'core/italic' ] }
                        onChange={ ( content ) => setAttributes({ cite: content }) }
                        placeholder={ __( 'Cite' ) }
                    />
                </CardBody>
            </Card>
        </>
    );
}
