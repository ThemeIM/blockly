import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const { title, subtitle, image } = attributes;

    return (
        <section className="overview-section ptb-120">
            <div className="overview-element-one">
                <img src="assets/images/element/element-27.png" alt="element" />
            </div>
            <div className="overview-element-two">
                <img src="assets/images/element/element-28.png" alt="element" />
            </div>
            <div className="container custom-container">
                <div className="overview-area">
                    <div className="overview-element-three">
                        <img
                            src="assets/images/element/element-29.png"
                            alt="element"
                        />
                    </div>
                    <div className="row justify-content-center align-items-center mb-30-none">
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="overview-content">
                                <h2 className="title">{title}</h2>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="overview-thumb">
                                <img src={image} alt="element" />
                                <div className="overview-thumb-element-one">
                                    <img
                                        src="assets/images/element/element-31.png"
                                        alt="element"
                                    />
                                </div>
                                <div className="overview-thumb-element-two">
                                    <img
                                        src="assets/images/element/element-32.png"
                                        alt="element"
                                    />
                                </div>
                                <div className="overview-thumb-element-three">
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
