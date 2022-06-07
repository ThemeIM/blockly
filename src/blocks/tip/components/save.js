import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const { title, tip } = attributes;

    return (
        <div className="blog-desc-area">
            <div className="blog-desc">
                <h3 className="title">{ title }:</h3>
                { tip }
            </div>
        </div>
    );
}
