export default function CategoryDropdown({ categories, selected, setSelected }) {
    return (
        <div className="form-group">
            <select className="from-control" value={selected}>
                {
                    typeof categories.map === 'function' && categories.map((category, index) => (
                        <option value={category.id} onClick={() => setSelected(category.id)}>{ category.name }</option>
                    ))
                }
            </select>
        </div>
    )
}
