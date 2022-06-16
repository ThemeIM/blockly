import { __ } from "@wordpress/i18n";
import { __experimentalGetSettings } from "@wordpress/date";
import { useState } from "react";
import {
    Button,
    SelectControl,
    Card,
    CardBody,
    __experimentalText as Text,
} from "@wordpress/components";

import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function Edit({ attributes, setAttributes }) {
    const { table_style, column_names, rows } = attributes;
    let [state, setState] = useState(0);

    const addColumn = () => {
        // add column name
        setAttributes({ column_names: [ ...column_names, '' ] })

        // add column in each row
        let all_rows = [ ...rows ]
        all_rows.map(row_arr => row_arr.push(''))
        setAttributes({ rows: [ ...all_rows ] })
        setState(state + 1)
    }

    const addRow = () =>
        setAttributes({
            rows: [...rows, [...column_names.map((column) => "")]],
        });

    const updateColumnName = (index, data) => {
        const all_columns = [ ...column_names ]
        all_columns[index] = data
        setAttributes({ column_names: all_columns })
        setState(state + 1)
    }

    const updateRow = (row_index, cell_index, data) => {
        const all_rows = [ ...rows ]
        all_rows[row_index][cell_index] = data
        setAttributes({ rows: [ ...all_rows ] })
        setState(state + 1)
    }

    const removeColumn = index => {}
    const removeRow = () => {}

    return (
        <>
            <Card>
                <CardBody>
                    <SelectControl
                        label="Table style"
                        value={table_style}
                        options={[
                            { label: "Normal", value: "normal" },
                            { label: "Striped", value: "striped" },
                        ]}
                        onChange={(content) =>
                            setAttributes({ table_style: content })
                        }
                        __nextHasNoMarginBottom
                    />
                    <div className={`table-area table-responsive ${ table_style === 'striped' ? 'style-01' : '' }`}>
                        <table class="custom-table">
                            <thead>
                                <tr>
                                    {
                                        typeof column_names.map === 'function' && column_names.map((column, index) => (
                                            <th key={index}>
                                                {/* updateColumnName */}
                                                <RichText 
                                                    tagName = "h6"
                                                    className = "content"
                                                    value = { column }
                                                    onChange = { (content) => updateColumnName(index, content) }
                                                    placeholder = 'Add text...'
                                                    format="string"
                                                />
                                            </th>
                                        ))
                                    }
                                    <Button variant="secondary" onClick={addColumn}>+</Button>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    typeof rows.map === 'function' && rows.map((row, index) => (
                                        <tr key={index}>
                                            {
                                                typeof row.map === 'function' && row.map((cell, i) => (
                                                    <td key={i}>
                                                        { i + 1 }.{' '}
                                                        <RichText 
                                                            tagName = "p"
                                                            className = "content"
                                                            value = { cell }
                                                            onChange = { (content) => updateRow(index, i, content) }
                                                            placeholder = 'Add text...'
                                                            format="string"
                                                        />
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <Button variant="secondary" onClick={addRow}>Add Row</Button>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
