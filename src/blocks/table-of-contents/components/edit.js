import { __ } from '@wordpress/i18n';
import { Button, Card, CardBody, __experimentalText as Text, TextControl, Dashicon } from '@wordpress/components';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import { useState } from '@wordpress/element';

import '../styles/editor.scss'
import '../styles/style.scss'


export default function Edit({ attributes, setAttributes }) {
    const { title, table_of_contents } = attributes
    const [state, setState] = useState(0);

    // TOC item
    const addTOCItem = () => {
        let new_state = [
            ...table_of_contents,
            {
                text: '',
                link: '',
                items: [
                    {text: '', link: ''}
                ]
            }
        ]
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

    // TOC child item
    const addTOCChildItem = (index) => {
        let new_state = [ ...table_of_contents ]

        if (new_state[index]['items']) {
            new_state[index]['items'] = [ ...new_state[index]['items'], {text: '', link: ''} ]
        }

        setState(state + 1)
        setAttributes({ table_of_contents: new_state })
    }

    const updateTOCChildItem = (toc_index, toc_child_index, type, data) => {
        let new_state = [ ...table_of_contents ]

        if (new_state[toc_index]['items'][toc_child_index]) {
            new_state[toc_index]['items'][toc_child_index][type] = data
        }

        setState(state + 1)
        return setAttributes({ table_of_contents: new_state })
    }

    const removeTOCChildItem = (toc_index, toc_child_index) => {
        let new_state = [ ...table_of_contents ]

        if (new_state[toc_index]['items'] && new_state[toc_index]['items'].length) {
            new_state[toc_index]['items'].splice(toc_child_index, 1)
        }

        setState(state + 1)
        setAttributes({ table_of_contents: new_state })
    }

    const blockProps = useBlockProps()
    const styles = {
        items_container: {
            marginTop: '20px',
            marginBottom: '20px',
        },
        close_btn_container: {
            display: 'flex',
            justifyContent: 'end'
        },
        close_btn: {
            marginTop: '-15px',
            marginRight: '-15px',
        },
        toc_items_repeater_container: {
            marginLeft: '15px',
            padding: '20px',
            border: '1px solid grey'
        }
    }

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

                <div style={styles.items_container}>
                {
                    typeof table_of_contents.map === 'function' && table_of_contents.map((toc, index) => (
                        <Card>
                            <CardBody>
                                <div style={styles.close_btn_container}>
                                    <Button variant='secondary' style={styles.close_btn} onClick={() => removeTOCItem(index)}>
                                        <Dashicon icon={ 'no' } />
                                    </Button>
                                </div>

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

                                <div style={styles.toc_items_repeater_container}>
                                    {
                                        typeof toc.items?.map === 'function' && toc.items.map((toc_child, child_i) => (
                                            <>
                                                <div style={styles.close_btn_container}>
                                                    <Button variant='secondary' onClick={() => removeTOCChildItem(index, child_i)}>
                                                        <Dashicon icon={ 'no' } />
                                                    </Button>
                                                </div>
                                                <TextControl
                                                    label={ 'Text' }
                                                    value={ toc_child.text }
                                                    onChange={value => updateTOCChildItem(index, child_i, 'text', value)}
                                                />
                                                <TextControl
                                                    label={ 'Link' }
                                                    value={ toc_child.link }
                                                    onChange={value => updateTOCChildItem(index, child_i, 'link', value)}
                                                />
                                            </>
                                        ))
                                    }
                                    <Button variant='secondary' onClick={() => addTOCChildItem(index)}>Add List Item</Button>
                                </div>

                            </CardBody>
                        </Card>
                    ))
                }
                </div>

                <Button variant='secondary' onClick={() => addTOCItem()}>Add Item</Button>
            </CardBody>
        </Card>
    )
}
