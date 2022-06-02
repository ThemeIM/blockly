import { snake_ify } from "../Helpers"
import './style/editor.scss'

export default function RepeaterContainer({ value = '', label = '', setAttributeValue, attributeName }) {
    let id = snake_ify(label)
    return (
        <div className="form-group setting-input-group">
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
