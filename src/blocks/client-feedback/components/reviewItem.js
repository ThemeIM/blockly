export default function ReviewItem({ user_name, user_info, user_image, review }) {
    return (
        <div class="swiper-slide">
            <div class="client-item">
                <div class="client-header">
                    <div class="client-quote">
                        <img src={`${ blocklyBlockData['blockly_url'] }assets/images/client/quote.png`} alt="client" />
                    </div>
                    <div class="client-thumb">
                        <img src={ user_image } alt="client" />
                    </div>
                </div>
                <div class="client-content">
                    <p>{ review }</p>
                </div>
                <div class="client-footer">
                    <div class="client-footer-left">
                        <h4 class="title">{ user_name }</h4>
                        <span class="sub-title">{ user_info }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
