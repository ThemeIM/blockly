import "../styles/style.scss";

export default function Save({ attributes, setAttributes }) {
    const { title, table_of_contents } = attributes;

    const getTOCChildItems = (child_items) => (
        child_items?.length && typeof child_items?.map === 'function' && (
            <ul>
                {
                    typeof child_items?.map === 'function' && child_items.map((toc_child, child_i) => (
                        <li>Beginner level</li>
                    ))
                }
            </ul>
        )
    )

    return (
        <div className="blog-list-area">
            <div className="blog-list-header">
                <h4 className="title">{title}</h4>
                <span className="hide">Hide</span>
            </div>
            <ul className="blog-list">
                {
                    typeof table_of_contents.map === 'function' && table_of_contents.map((toc, i) => (
                        <li>
                            <a href={`#${toc.link}`}>{toc.text}</a>
                            {
                                toc.items?.length && typeof toc.items?.map === 'function' && (
                                    <ul>
                                        {
                                            typeof toc.items?.map === 'function' && toc.items.map((toc_child, child_i) => (
                                                <li key={child_i}>
                                                    <a href={`#${toc_child.link}`}>
                                                        { toc_child.text }
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}