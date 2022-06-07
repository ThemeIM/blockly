import { __ } from "@wordpress/i18n";
import { __experimentalGetSettings } from "@wordpress/date";
import { useState } from "react";
import { Button, SelectControl, Card, CardBody, __experimentalText as Text } from '@wordpress/components';

import { useBlockProps, RichText } from '@wordpress/block-editor';

import PlanInput from "./planInput";

export default function Edit({ attributes, setAttributes }) {
    const { title, plans } = attributes;
    let [state, setState] = useState(0);

    const addPlan = () =>
        setAttributes({
            plans: [
                ...plans,
                {
                    type: "",
                    details: "",
                    price: 0,
                    duration: "",
                    cta_text: "",
                    cta_url: "",
                    features: [],
                },
            ],
        });

    const updatePlan = (index, key, value) => {
        let all_plans = plans;
        all_plans[index][key] = value;
        setState(++state);
        return setAttributes({ plans: all_plans });
    };

    const addFeature = (plan_index) => {
        let all_plans = plans;
        all_plans[plan_index]["features"].push("");
        setState(++state);
        return setAttributes({ plans: all_plans });
    };

    const updateFeature = (plan_index, feature_index, data) => {
        let all_plans = plans;
        all_plans[plan_index]["features"][feature_index] = data;
        setState(++state);
        return setAttributes({ plans: all_plans });
    };

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
                        placeholder={ __( 'Section Name...' ) }
                    />
                    {
                        typeof plans?.map === "function" &&
                        plans.map((plan, index) => (
                            <Card>
                                <CardBody>
                                    <Text adjustLineHeightForInnerControls size="largeTitle" style={{ marginBottom: '15px' }}>Plan-{index + 1}</Text>
                                    <PlanInput
                                        placeholder={"Plan Name"}
                                        value={plan.type}
                                        callback={ value => updatePlan(
                                                index,
                                                "type",
                                                value
                                            )
                                        }
                                    />
                                    <SelectControl
                                        label="Badge Color"
                                        value={ plan.badge_color }
                                        options={ [
                                            { label: 'Green', value: 'green' },
                                            { label: 'Purple', value: 'purple' },
                                            { label: 'Red', value: 'red' },
                                            { label: 'blue', value: 'blue' },
                                        ] }
                                        onChange={ color => updatePlan( index, "badge_color", color) }
                                        __nextHasNoMarginBottom
                                    />
                                    <PlanInput
                                        placeholder={"Plan Info"}
                                        value={plan.details}
                                        callback={ value => updatePlan(
                                                index,
                                                "details",
                                                value
                                            )
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan Popularity Text"}
                                        value={plan.popular_text}
                                        callback={ value => updatePlan(
                                                index,
                                                "popular_text",
                                                value
                                            )
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan Price"}
                                        value={plan.price}
                                        callback={ value => updatePlan(
                                                index,
                                                "price",
                                                value
                                            )
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan Duration"}
                                        value={plan.duration}
                                        callback={ value => updatePlan(
                                                index,
                                                "duration",
                                                value
                                            )
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan CTA Text"}
                                        value={plan.cta_text}
                                        callback={ value => updatePlan(
                                                index,
                                                "cta_text",
                                                value
                                            )
                                        }
                                    />
                                    <PlanInput
                                        placeholder={"Plan CTA URL"}
                                        value={plan.cta_url}
                                        callback={ value => updatePlan(
                                                index,
                                                "cta_url",
                                                value
                                            )
                                        }
                                    />
                                    <div className="feature-container">
                                        <Text isBlock adjustLineHeightForInnerControls size="large" style={{ marginBottom: '15px' }}>Features</Text>
                                        {
                                            typeof plan.features.map === "function" &&
                                            plan.features.map(
                                                (feature, feature_index) => (
                                                    <div className="from-group">
                                                        <PlanInput
                                                            placeholder={`Feature-${feature_index + 1}`}
                                                            value={feature}
                                                            callback={ value => updateFeature(
                                                                    index,
                                                                    feature_index,
                                                                    value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                )
                                            )
                                        }
                                        <Button
                                            variant="secondary"
                                            onClick={() => addFeature(index)}
                                        >Add Feature</Button>
                                    </div>
                                </CardBody>
                            </Card>
                        ))
                    }
                    <div style={{ paddingTop: '15px' }}>
                        <Button variant="secondary" onClick={addPlan}>Add Plan</Button>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
