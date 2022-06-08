import "../styles/style.scss";

export default function Save({ attributes, setAttributes }) {
    const { item_style, feature_list } = attributes

    let list_data = ''

    typeof feature_list.map === 'function' && feature_list.map((feature, i) => {
        list_data += <li key={i}>{ feature }</li>
    })

    if (item_style == bordered) {
        return (
            <div className="feature-list-area">
                <ul className="feature-list">
                    { list_data }
                </ul>
            </div>
        )
    }

    return (
        <div className="blog-content-list-area">
            <ul className="blog-content-list">
                { list_data }
            </ul>
        </div>
    )
}
