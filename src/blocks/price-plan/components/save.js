import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
    const { title, plans } = attributes;

    return (
        <>
            <span class="et-highlighted-overlay"></span>
            <section className="plan-section ptb-120 blockly-full">
                <div className="container custom-container-two">
                    <div className="plan-wrapper et-highlightable et-highlighted">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-8 text-center">
                                <div className="section-header white">
                                    <h2 className="section-title">
                                        {title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="plan-element-one">
                            <img
                                src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-25.png`}
                                alt="element"
                            />
                        </div>
                        <div className="plan-element-two">
                            <img
                                src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-26.png`}
                                alt="element"
                            />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="plan-area">
                                    <div className="row justify-content-center mb-30-none">
                                        {
                                            typeof plans.map === 'function' && plans.map((plan, i) => (
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 mb-30">
                                                    <div className="plan-item">
                                                        <div className="plan-content">
                                                            <div className="plan-header">
                                                                <div className="plan-badge-area">
                                                                    <span className={`plan-badge ${plan.badge_color ?? 'green'}`}>
                                                                        {plan.type}
                                                                    </span>
                                                                    {
                                                                        plan.popular_text && 
                                                                        <span class="plan-badge blue">{plan.popular_text}</span>
                                                                    }
                                                                </div>
                                                                <p>
                                                                    {plan.details}
                                                                </p>
                                                            </div>
                                                            <div className="plan-price-area">
                                                                <h2 className="price-title">
                                                                    <sup>$</sup>{plan.price}
                                                                    <sub>/{plan.duration}</sub>
                                                                </h2>
                                                            </div>
                                                            <ul className="plan-list">
                                                                {
                                                                    typeof plan.features.map === 'function' &&
                                                                    plan.features.map((feature, i) => (
                                                                        <li key={i}>{feature}</li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="plan-footer">
                                                            <a href={`${plan.cta_url}`}>
                                                                <h3 className="title">
                                                                    {plan.cta_text}
                                                                </h3>
                                                                <div className="plan-btn">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
