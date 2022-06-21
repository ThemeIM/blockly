import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const { quote, cite } = attributes;

    return (
        <div class="blog-quote-area">
            <blockquote>
                "{quote}"
                <h3 class="title">- { cite }</h3>
            </blockquote>
        </div>
    );
}
