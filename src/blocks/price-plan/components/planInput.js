import { TextControl } from '@wordpress/components';

export default function PlanInput({ placeholder, value, plan_index, callback }) {
    return (
        <TextControl
            label={ placeholder }
            value={ value }
            onChange={value => callback(value)}
        />
    )
}
