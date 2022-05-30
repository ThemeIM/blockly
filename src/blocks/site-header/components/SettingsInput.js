import { snake_ify } from '../Helpers'

export default function SettingsInput({ value = '', label = '', setAttributeValue, attributeName }) {
    let id = snake_ify(label)
    return (
        <div className="form-group">
            <label htmlFor={ id }>{ label }</label>
            <input type="text"
                id={id}
                className="form-control"
                value={ value }
                onChange={e => setAttributeValue(attributeName, e.target.value)}
            />
        </div>
    )
}
