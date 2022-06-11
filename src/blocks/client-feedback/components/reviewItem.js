export default function ReviewItem({ user_name, user_info, user_image, review }) {
    return (
        <div
            className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
            data-swiper-slide-index="0"
            style={{
                width: '350px',
                marginRight: '30px'
            }}
        >
            <div className="client-item">
                <div className="client-header">
                    <div className="client-quote">
                        <img
                            src={`${ blocklyBlockData['blockly_url'] }assets/images/client/quote.png`}
                            alt="client"
                        />
                    </div>
                    <div className="client-thumb">
                        <img src={ user_image } alt="client" />
                    </div>
                </div>
                <div className="client-content">
                    <p>
                        { review }
                    </p>
                </div>
                <div className="client-footer">
                    <div className="client-footer-left">
                        <h4 className="title">
                            { user_name }
                        </h4>
                        <span className="sub-title">
                            { user_info }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
