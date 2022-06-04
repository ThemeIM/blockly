export default function RepeaterContainer({ children }) {
    return (
        <div className="faq-input-item">
            <button className="btn remove-item" onClick={e => removeFaqItem(index)}>x</button>
            { children }
        </div>
    )
}
