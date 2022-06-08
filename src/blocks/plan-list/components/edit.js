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
    const { title, plans } = attributes;
    let [state, setState] = useState(0);

    const addPlan = () =>
        setAttributes({
            plans: [...plans, ""],
        });

    const updatePlan = (index, value) => {
        let all_plans = plans;
        all_plans[index] = value;
        setState(++state);
        return setAttributes({ plans: all_plans });
    };

    const removePlan = index => {
        let new_state = [ ...plans ]
        new_state.splice(index, 1)
        setState(new_state)
        setAttributes({ plans: new_state })
    }

    const blockProps = useBlockProps();

    console.log(plans);

    return (
        <>
            <Card>
                <CardBody>
                    <RichText
                        {...blockProps}
                        tagName="h5"
                        value={title}
                        allowedFormats={["core/bold", "core/italic"]}
                        onChange={(content) => setAttributes({ title: content }) }
                        placeholder={__("Section Name...")}
                    />
                    <div className="plan-list">
                        {
                            typeof plans?.map === "function" && plans.map((plan, index) => (
                                <div className="plan">
                                    <button
                                        className="btn-remove"
                                        onClick={ () => removePlan(index) }
                                    >x</button>
                                    <RichText
                                        {...blockProps}
                                        tagName="p"
                                        value={ plan }
                                        allowedFormats={[
                                            "core/bold",
                                            "core/italic"
                                        ]}
                                        onChange={(content) => updatePlan(index, content) }
                                        placeholder={__("Plan text")}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div style={{ paddingTop: "15px" }}>
                        <Button variant="secondary" onClick={addPlan}>
                            Add Plan
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
