export default function FormContainer({ children }) {
    return (
        <div className="card" style={{ maxWidth: '100%' }}>
            <div className="card-body">
                { children }
            </div>
        </div>
    )
}
