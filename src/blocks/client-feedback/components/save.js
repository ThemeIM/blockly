import ReviewItem from "./reviewItem";
import SliderNext from "./sliderNext";
import SliderPrev from "./sliderPrev";

export default function Save({ attributes, setAttributes }) {
    const { title, subtitle, video_thumbnail, video_url, items } = attributes;

    return (
        <section class="client-section bg--gray ptb-120">
            <div class="client-element">
                <img src={`${ blocklyBlockData['blockly_url'] }assets/images/element/element-19.png`} alt="element" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="section-header-wrapper">
                            <div class="section-header">
                                <h2 class="section-title">{ title }</h2>
                                <p>{ subtitle }</p>
                            </div>
                            <div class="slider-nav-area">
                                <SliderPrev />
                                <SliderNext />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="client-area">
                    <div class="row justify-content-center align-items-end mb-30-none">
                        <div class="col-xl-8 col-lg-8 col-md-6 mb-30">
                            <div class="client-slider">
                                <div class="swiper-wrapper">
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
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="client-right-thumb">
                                <img
                                    src={video_thumbnail}
                                    alt="client"
                                />
                                <div class="client-thumb-overlay">
                                    <div class="client-thumb-video">
                                        <div class="video-main">
                                            <div class="promo-video">
                                                <div class="waves-block">
                                                    <div class="waves wave-1"></div>
                                                    <div class="waves wave-2"></div>
                                                    <div class="waves wave-3"></div>
                                                </div>
                                            </div>
                                            <a
                                                class="video-icon"
                                                data-rel="lightcase:myCollection"
                                                href={video_url}
                                            >
                                                <i class="fas fa-play"></i>
                                            </a>
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
