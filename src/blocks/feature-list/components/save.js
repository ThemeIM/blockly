import "../styles/style.scss";

export default function Save({ attributes, setAttributes }) {
    const { title, table_of_contents } = attributes;

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
                            <a href={`#${toc.link}`}>Introduction</a>
                            <ul>
                                <li>Beginner level</li>
                                <li>Advance level</li>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
