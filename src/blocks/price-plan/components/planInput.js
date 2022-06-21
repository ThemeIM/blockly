import { TextControl, Button } from '@wordpress/components';

export default function PlanInput({ placeholder, value, callback, is_closable, closeCallback }) {
    return (
        <>
            <TextControl
                label={ placeholder }
                value={ value }
                onChange={value => callback(value)}
            />
            {
                is_closable && (
                    <Button
                        variant='secondary'
                        onClick={() => closeCallback()}
                    >Remove</Button>
                )
            }
        </>
    )
}
