import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const { title, plans } = attributes;

   

    return (
        <div class="plan-list-area">
            <h5 class="title">{ title }</h5>
            <ul class="plan-list">
                {
                    typeof plans.map === 'function' && plans.map((plan, i) => (
                        <li key={i}>{plan}</li>
                    ))
                }
            </ul>
        </div>
    );
}
