export default function Save({ attributes, setAttributes }) {
    const {
        subtitle,
        title,
        subtitle_2,
        subtitle_3,
        customer_text,
    } = attributes

    return (
        <section class="banner-section blockly-full">
            <div class="banner-element">
                <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-5.png`} alt="element" />
            </div>
            <div class="banner-group-shape active">
                <div class="banner-group-element-one">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-6.png`} alt="element" />
                </div>
                <div class="banner-group-element-two">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/REPLACE-THIS-SCREEN1111211171111.png`} alt="element" />
                </div>
                <div class="banner-group-element-three">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-1.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-four">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-2.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-five">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-3.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-six">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-4.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-seven">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-5.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-eight">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-6.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-nine">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-7.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-ten">
                    <a href="#0" class="banner-project">
                        <div class="banner-project-element">
                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/project/project-8.png`} alt="project" />
                        </div>
                    </a>
                </div>
                <div class="banner-group-element-twelve">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-9.png`} alt="element" />
                </div>
                <div class="banner-group-element-thirteen">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-10.png`} alt="element" />
                </div>
                <div class="banner-group-element-fourteen">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-12.png`} alt="element" />
                </div>
                <div class="banner-group-element-fifteen">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-11.png`} alt="element" />
                </div>
                <div class="banner-group-element-sixteen">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-11.png`} alt="element" />
                </div>
                <div class="banner-group-element-seventeen">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-11.png`} alt="element" />
                </div>
                <div class="banner-group-element-eightteen">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-12.png`} alt="element" />
                </div>
                <div class="banner-group-element-nineteen">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-12.png`} alt="element" />
                </div>
                <div class="banner-group-element-twenty">
                    <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-12.png`} alt="element" />
                </div>
            </div>
            <div class="container custom-container">
                <div class="row align-items-end mb-30-none">
                    <div class="col-xl-7 col-lg-8 mb-30">
                        <div class="banner-content aos-init aos-animate" data-aos="fade-right" data-aos-duration="1800">
                            <div class="banner-content-element">
                                <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-4.png`} alt="element" />
                            </div>
                            <h3 class="sub-title">{ subtitle }</h3>
                            <h1 class="title">{ title }</h1>
                            <h3 class="inner-title">{ subtitle_2 }</h3>
                            <p>{ subtitle_3 }</p>
                            <div class="banner-arrow">
                                <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-1.png`} alt="element" />
                            </div>
                            <div class="banner-widget">
                                <div class="banner-widget-wrapper">
                                    <div class="banner-widget-left">
                                        <div class="banner-widget-thumb">
                                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-2.png`} alt="element" />
                                        </div>
                                    </div>
                                    <div class="banner-widget-middle">
                                        <div class="banner-widget-content">
                                            <p>{ customer_text }</p>
                                        </div>
                                    </div>
                                    <div class="banner-widget-right">
                                        <div class="banner-widget-thumb">
                                            <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-3.png`} alt="element" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
