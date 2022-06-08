

export default function Save({ attributes, setAttributes }) {
    const { item_style, feature_list } = attributes

    if (item_style == 'bordered') {
        return (
            <div className="feature-list-area">
                <ul className="feature-list">
                    {
                        typeof feature_list.map === 'function' && feature_list.map((feature, i) => (
                            <li key={i}>{ feature.feature }</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    return (
        <div className="blog-content-list-area">
            <ul className="blog-content-list" data-x={ typeof feature_list.map }>
                {
                    typeof feature_list.map === 'function' && feature_list.map((feature, i) => (
                        <li key={i}>{ feature.feature }</li>
                    ))
                }
            </ul>
        </div>
    )
}
