import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const { title, subtitle, image } = attributes;

    return (
        <section class="overview-section ptb-120">
            <div class="overview-element-one">
                <img src="assets/images/element/element-27.png" alt="element" />
            </div>
            <div class="overview-element-two">
                <img src="assets/images/element/element-28.png" alt="element" />
            </div>
            <div class="container custom-container">
                <div class="overview-area">
                    <div class="overview-element-three">
                        <img
                            src="assets/images/element/element-29.png"
                            alt="element"
                        />
                    </div>
                    <div class="row justify-content-center align-items-center mb-30-none">
                        <div class="col-xl-5 col-lg-6 mb-30">
                            <div class="overview-content">
                                <h2 class="title">{title}</h2>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6 mb-30">
                            <div class="overview-thumb">
                                <img src={image} alt="element" />
                                <div class="overview-thumb-element-one">
                                    <img
                                        src="assets/images/element/element-31.png"
                                        alt="element"
                                    />
                                </div>
                                <div class="overview-thumb-element-two">
                                    <img
                                        src="assets/images/element/element-32.png"
                                        alt="element"
                                    />
                                </div>
                                <div class="overview-thumb-element-three">
                                    <img
                                        src="assets/images/element/element-33.png"
                                        alt="element"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
