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

import PlanInput from "./planInput";

export default function Edit({ attributes, setAttributes }) {
    const { table_style, column_names, rows } = attributes;
    let [state, setState] = useState(0);

    /*
        {
			table_style: 'normal',
			column_names: [
				'Column 1',
				'Column 2',
			],
			rows: [
				['Test 1', 'Test 2']
			],
		}
    */

    /**
     * ==================== ==================== ====================
     */
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
                                                { column }
                                            </th>
                                        ))
                                    }
                                </tr>
                                <tr>
                                    <Button onClick={addColumn}>+</Button>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    typeof rows.map === 'function' && rows.map((row, index) => (
                                        <tr key={index}>
                                            {
                                                typeof row.map === 'function' && row.map((cell, i) => (
                                                    <td key={i}>{ i + 1 }. { cell }</td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                                <tr>
                                    <Button onClick={addRow} >Add Row</Button>
                                </tr>
                            </tbody>
                        </table>
                    </div>





                    {/* <div style={{ paddingTop: "15px" }}>
                        <Button variant="secondary" onClick={addRow}>
                            Add Plan
                        </Button>
                    </div> */}



                    {/* {typeof plans?.map === "function" &&
                        plans.map((plan, index) => (
                            <Card>
                                <CardBody>
                                    <Text
                                        adjustLineHeightForInnerControls
                                        size="largeTitle"
                                        style={{ marginBottom: "15px" }}
                                    >
                                        Plan-{index + 1}
                                    </Text>
                                    <PlanInput
                                        placeholder={"Plan Name"}
                                        value={plan.type}
                                        callback={(value) =>
                                            updatePlan(index, "type", value)
                                        }
                                    />
                                    <SelectControl
                                        label="Badge Color"
                                        value={plan.badge_color}
                                        options={[
                                            { label: "Green", value: "green" },
                                            {
                                                label: "Purple",
                                                value: "purple",
                                            },
                                            { label: "Red", value: "red" },
                                            { label: "blue", value: "blue" },
                                        ]}
                                        onChange={(color) =>
                                            updatePlan(
                                                index,
                                                "badge_color",
                                                color
                                            )
                                        }
                                        __nextHasNoMarginBottom
                                    />
                                    <PlanInput
                                        placeholder={"Plan Info"}
                                        value={plan.details}
                                        callback={(value) =>
                                            updatePlan(index, "details", value)
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan Popularity Text"}
                                        value={plan.popular_text}
                                        callback={(value) =>
                                            updatePlan(
                                                index,
                                                "popular_text",
                                                value
                                            )
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan Price"}
                                        value={plan.price}
                                        callback={(value) =>
                                            updatePlan(index, "price", value)
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan Duration"}
                                        value={plan.duration}
                                        callback={(value) =>
                                            updatePlan(index, "duration", value)
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan CTA Text"}
                                        value={plan.cta_text}
                                        callback={(value) =>
                                            updatePlan(index, "cta_text", value)
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan CTA URL"}
                                        value={plan.cta_url}
                                        callback={(value) =>
                                            updatePlan(index, "cta_url", value)
                                        }
                                    />
                                    <div className="feature-container">
                                        <Text
                                            isBlock
                                            adjustLineHeightForInnerControls
                                            size="large"
                                            style={{ marginBottom: "15px" }}
                                        >
                                            Features
                                        </Text>
                                        {typeof plan.features.map ===
                                            "function" &&
                                            plan.features.map(
                                                (feature, feature_index) => (
                                                    <div className="from-group">
                                                        <PlanInput
                                                            placeholder={`Feature-${
                                                                feature_index +
                                                                1
                                                            }`}
                                                            value={feature}
                                                            callback={(value) =>
                                                                updateFeature(
                                                                    index,
                                                                    feature_index,
                                                                    value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )}
                                        <Button
                                            variant="secondary"
                                            onClick={() => addFeature(index)}
                                        >
                                            Add Feature
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        ))} */}
                    
                </CardBody>
            </Card>
        </>
    );
}
