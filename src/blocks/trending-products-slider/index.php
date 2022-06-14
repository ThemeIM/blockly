<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_trending_products')) {
    function blockly_register_trending_products() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/trending-products-slider', 
            array(
                'attributes'      => array(
                    'title' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'subtitle' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'products' => [
                        'type' => 'array',
                        'default' => []
                    ]
                ),
                'render_callback' => 'blockly_render_trending_products',
            )
        );
    }
}

add_action( 'init', 'blockly_register_trending_products' );


//render front end alert box 
if (!function_exists('blockly_render_trending_products')) {
    function blockly_render_trending_products( $attributes ) {
        ob_start();
?>
<section class="trending-product-section bg--gray ptb-120">
    <?php if(isset($attributes['backgroudImage']) && '' != $attributes['backgroudImage']){ ?>
        <div class="trending-product-element">
            <img src="<?php echo esc_url($attributes['backgroudImage']); ?>" alt="element">
        </div>
    <?php } ?>
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="section-header-wrapper">
                    <div class="section-header">
                        <h2 class="section-title">Trending Items</h2>
                        <p>We teach martial arts because we love it — not because we want to make money on you. Unlike.</p>
                    </div>
                    <div class="slider-nav-area">
                        <div class="slider-prev">
                            <i class="fas fa-chevron-left"></i>
                        </div>
                        <div class="slider-next">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xl-12">
                <div class="free-product-slider-area">
                    <div class="trending-product-slider">
                        <div class="swiper-wrapper">
                            <?php $product_ids = [];
                foreach ($attributes['products'] as $key => $product) {
                    $product_ids[] = $product['value'];
                }

                $loop = new \WP_Query([
                    'post_type' => 'product',
                    'posts_per_page' => count($product_ids),
                    'post__in'=> $product_ids
                ]);

                if($loop ->have_posts()) {
                    while($loop->have_posts()) {
                        $loop->the_post();
                        $get_themeim_meta = get_post_meta(get_the_ID(), 'themeim_product_options', true);
                        $data['product_id'] = isset($get_themeim_meta['_themeforest_id']) ? $get_themeim_meta['_themeforest_id'] : '';
                        $product_info = '';

                        if (class_exists('Themeim_API_INIT')) {
                            $product_info = Themeim_API_INIT::get_themeforest_info($data); 
                        }

                        $product_item = isset($product_info->item) ? $product_info->item: '';
                        $cost = $sales = $preview = '';

                        if ('' != $product_item) {
                            $cost = isset($product_item->cost) ? $product_item->cost : '';
                            $sales = isset($product_item->sales) ? $product_item->sales : '';
                            $preview = isset($product_item->url) ? $product_item->url : '';
                        } ?>
                            <div class="swiper-slide">
                                <div class="product-item">
                                    <div class="product-badge">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div class="product-thumb">
                                        <?php 
                                          if(has_post_thumbnail()){
                                            the_post_thumbnail('tranding_480x300');
                                          }
                                         ?>
                                        
                                        <div class="product-thumb-overlay">
                                            <div class="product-overlay-btn">
                                                <a href="<?php echo esc_url($preview); ?>" class="btn--base active">PREVIEW</a>
                                                <a href="<?php esc_url(the_permalink()); ?>" class="btn--base">DETAILS</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                       <?php the_title('<h4 class="title"><a href="'.get_the_permalink().'">', '</a></h4>'); ?>
                                        <?php 
                                            $terms = get_the_terms( get_the_ID(), 'product_cat' ); 
                                            if((is_array($terms) || is_object($terms)) && !empty($terms)){
                                                foreach($terms as $key=>$cat){
                                                printf("<span class='category'>%s</span>",$cat->name);
                                                if($key == 0 ){
                                                    break;
                                                }
                                                }
                                            }
                                        ?>
                                        <div class="product-footer-area">
                                            <div class="left">
                                                <span class="sale">Sales : <?php echo esc_html($sales); ?></span>
                                            </div>
                                            <div class="right">
                                                <span class="price">Price : <?php echo esc_html($cost); ?></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php }} ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php return ob_get_clean(); 
    }
}
?>