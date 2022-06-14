export default function Save({ attributes, setAttributes }) {
    const { items } = attributes

    return (
        <section className="feature-section pt-120 blockly-full">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-10">
                        <div className="feature-area">
                            <div className="row justify-content-center mb-30-none">
                                {
                                    typeof items.map === 'function' && items.map((feature, index) => (
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <img
                                                        src={feature.icon_image}
                                                        alt="icon"
                                                    />
                                                </div>
                                                <div className="feature-content">
                                                    <h5 className="title">{ feature.info }</h5>
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
        </section>
    );
}
