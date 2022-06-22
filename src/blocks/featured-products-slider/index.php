<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_featured_products')) {
    function blockly_register_featured_products() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/featured-products-slider', 
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
                    'btn_name' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'products' => [
                        'type' => 'array',
                        'default' => []
                    ]
                ),
                'render_callback' => 'blockly_render_featured_products',
            )
        );
    }
}

add_action( 'init', 'blockly_register_featured_products' );


//render front end alert box 
if (!function_exists('blockly_render_featured_products')) {
    function blockly_render_featured_products( $attributes ) {
        ob_start();  ?>

<section class="free-product-section ptb-120 blockly-full">
    <div class="container custom-container">
        <div class="row justify-content-center mb-30-none">
            <div class="col-xl-8 col-lg-6 mb-30">
                <div class="free-product-slider-area">
                    <div class="free-product-slider">
                        <div class="swiper-wrapper">
                        <?php
                            $args = [
                                'post_type' => 'product',
                                'posts_per_page' => 4,
                                'tax_query' => [
                                    [
                                        'taxonomy' => 'product_cat',
                                        'field'    => 'slug',
                                        'terms'    => array( 'additional-services', 'theme-customization-options' ),
                                        'operator' => 'NOT IN'
                                    ]
                                ]
                            ];

                            $loop = new \WP_Query($args);

                            if($loop ->have_posts()) {
                                while($loop->have_posts()) {
                                    $loop->the_post();
                                    $get_themeim_meta = get_post_meta(get_the_ID(), 'themeim_product_options', true);
                                    $data['product_id'] = isset($get_themeim_meta['_themeforest_id']) ? $get_themeim_meta['_themeforest_id'] : '';
                                    $product_info = '';
                                    $is_woocommerce = (isset($get_themeim_meta['_themeforest_id']) && '' != (isset($get_themeim_meta['_themeforest_id']) && $get_themeim_meta['_themeforest_id'] != '')) ? false : true;

                                    if (class_exists('Themeim_API_INIT')) {
                                        $product_info = Themeim_API_INIT::get_themeforest_info($data); 
                                    }

                                    $product_item = isset($product_info->item) ? $product_info->item: '';
                                    $cost = $sales = $preview = '';

                                    if ('' != $product_item) {
                                        $cost = isset($product_item->cost) ? $product_item->cost : '';
                                        $sales = isset($product_item->sales) ? $product_item->sales : '';
                                        $preview = isset($product_item->url) ? $product_item->url : '';
                                    }
                                    if(isset($get_themeim_meta['_sales']) && $get_themeim_meta['_sales'] != '') {
                                        $sales = $get_themeim_meta['_sales'];
                                    }
                                    if($is_woocommerce) {
                                        $_product = wc_get_product( get_the_ID() );
                                        $cost = $_product->get_price();                                        ;
                                    }
                        ?>
                            <div class="swiper-slide">
                                <div class="product-item">
                                    <div class="product-badge">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div class="product-thumb">
                                        <?php
                                            if (has_post_thumbnail()) {
                                                the_post_thumbnail('product_image_360x225');
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
                                        <?php $get_short_title = wp_trim_words(get_the_title(), 5, '...'); ?>
                                        <h4 class="title">
                                            <a href="<?php the_permalink(); ?>">
                                                <?php echo esc_html($get_short_title); ?>
                                            </a>
                                        </h4>

                                        <?php
                                            $terms = get_the_terms(get_the_ID(), 'product_cat'); 

                                            if ( (is_array($terms) || is_object($terms)) && !empty($terms) ) {
                                                foreach($terms as $key => $cat) {
                                                    printf("<span class='category'>In %s</span>",$cat->name);
                                                    if($key == 0 ) break;
                                                }
                                            }
                                        ?>

                                        <div class="product-footer-area">
                                            <div class="left">
                                                <span class="sale">Sales : <?php echo esc_html($sales); ?></span>
                                            </div>
                                            <div class="right">
                                                <span class="price text--base">
                                                    <a href="<?php the_permalink(); ?>"><i class="fas fa-download"></i> FREE</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php
                                }
                            }
                        ?>
                        </div>
                        <div class="slider-prev">
                            <i class="las la-angle-left"></i> Prev
                        </div>
                        <div class="slider-next">
                            Next <i class="las la-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6 mb-30">
                <div class="free-product-content">
                    <div class="free-product-element">
                        <img src="<?php echo esc_url(BLY_ASSETS_URL) ?>/images/bg/bg-1.png" alt="bg">
                    </div>
                    <h2 class="title"><?php echo str_replace(['[br]'], ['<br/>'], $attributes['title']); ?></h2>
                    <p><?php echo $attributes['subtitle']; ?></p>
                    <div class="all-btn mt-50">
                        <a href="<?php 
                                            echo
                                                esc_url(
                                                    get_permalink(
                                                        wc_get_page_id( 'shop' )
                                                    )
                                                );
                                    ?>" class="btn--base active"
                        >
                            <?php echo $attributes['btn_name']; ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        <?php return ob_get_clean(); 
    }
}
