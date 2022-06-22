import ReviewItem from "./reviewItem";
import SliderNext from "./sliderNext";
import SliderPrev from "./sliderPrev";

export default function Save({ attributes, setAttributes }) {
    const { title, subtitle, video_thumbnail, video_url, items } = attributes;

    return ( 
        <>
        <div>
        <div className="client-section bg--gray ptb-120 blockly-full">
            <div className="client-element">
                <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-19.png`} alt="element" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-header-wrapper">
                            <div className="section-header">
                                <h2 className="section-title">{ title }</h2>
                                <p>{ subtitle }</p>
                            </div>
                            <div className="slider-nav-area">
                                <SliderPrev />
                                <SliderNext /> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="client-area">
                    <div className="row justify-content-center align-items-end mb-30-none">
                        <div className="col-xl-8 col-lg-8 col-md-6 mb-30">
                            <div className="client-slider">
                                <div className="swiper-wrapper">
                                    {
                                        typeof items.map === 'function' && items.map((item, i) => (
                                            <ReviewItem
                                                user_name={item.user_name}
                                                user_info={item.user_info}
                                                user_image={item.user_image}
                                                review={item.review}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="client-right-thumb">
                                <img
                                    src={video_thumbnail}
                                    alt="client"
                                />
                                <div className="client-thumb-overlay">
                                    <div className="client-thumb-video">
                                        <div className="video-main">
                                            <div className="promo-video">
                                                <div className="waves-block">
                                                    <div className="waves wave-1"></div>
                                                    <div className="waves wave-2"></div>
                                                    <div className="waves wave-3"></div>
                                                </div>
                                            </div>
                                            <a
                                                className="video-icon"
                                                data-rel="lightcase:myCollection"
                                                href={video_url}
                                            >
                                                <i className="fas fa-play"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
