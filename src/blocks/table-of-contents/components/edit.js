import { __ } from '@wordpress/i18n';
import { Button, Card, CardBody, __experimentalText as Text, TextControl } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'


export default function Edit({ attributes, setAttributes }) {
    const { title, table_of_contents } = attributes
    const [state, setState] = useState(0);

    const addTOCItem = () => {
        let new_state = [ ...table_of_contents, {text: '', link: ''} ]
        console.log({ old: table_of_contents.length, new: new_state.length });
        setState(state + 1)
        setAttributes({ table_of_contents: new_state })
    }

    const updateTOCItem = (index, type, data) => {
        let all_toc_items = [ ...table_of_contents ]
        all_toc_items[index][type] = data
        setState(state + 1)
        return setAttributes({ table_of_contents: all_toc_items })
    }

    const removeTOCItem = index => {
        let new_state = [ ...table_of_contents ]
        new_state.splice(index, 1)
        setState(state + 1)
        setAttributes({ table_of_contents: new_state })
    }

    const blockProps = useBlockProps()

    return (
        <Card>
            <CardBody>
                <Text isBlock adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Table of Contents</Text>

                <RichText
                    { ...blockProps }
                    tagName="h4"
                    value={ title }
                    allowedFormats={ [ 'core/bold', 'core/italic' ] }
                    onChange={ ( content ) => setAttributes({ title: content }) }
                    placeholder={ __( 'Section Name...' ) }
                />

                {
                    typeof table_of_contents.map === 'function' && table_of_contents.map((toc, index) => (
                        <Card>
                            <CardBody>
                                <Button variant='secondary' onClick={() => removeTOCItem(index)}>
                                    <i className='dashicons-no'></i>
                                    Remove Items
                                </Button>
                                <TextControl
                                    label={ 'Text' }
                                    value={ toc.text }
                                    onChange={value => updateTOCItem(index, 'text', value)}
                                />
                                <TextControl
                                    label={ 'Link' }
                                    value={ toc.link }
                                    onChange={value => updateTOCItem(index, 'link', value)}
                                />
                            </CardBody>
                        </Card>
                    ))
                }

                <Button variant='secondary' onClick={() => addTOCItem()}>Add Item</Button>
            </CardBody>
        </Card>
    )
}
