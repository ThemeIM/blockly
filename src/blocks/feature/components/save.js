export default function Save({ attributes, setAttributes }) {
    const { title, description, faq_items } = attributes

    return (
        <section className="faq-section ptb-120">
            <div className="faq-element">
                <img src="assets/images/element/element-20.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 text-center">
                        <div className="section-header">
                            <h2 className="section-title">{ title }</h2>
                            <p>{ description }</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12">
                        <div className="faq-wrapper">
                            {
                                typeof faq_items === 'function' && faq_items.map((faq_item, index) => (
                                    <div className="faq-item active open" key={index}>
                                        <h3 className="faq-title">
                                            <span className="title">
                                                <span>
                                                    { String(index + 1).padStart(2, '0') } <span className="dot">.</span>
                                                </span>{" "}
                                                { faq_item['question'] }
                                            </span>
                                            <span className="right-icon"></span>
                                        </h3>
                                        <div className="faq-content" style="">
                                            <p>{ faq_item['answer'] }</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
