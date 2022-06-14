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

<section class="trending-product-section bg--gray ptb-120 blockly-full">
  <div class="trending-product-element">
    <img src="assets/images/element/element-19.png" alt="element" />
  </div>
  <div class="container">
    <div class="row">
      <div class="col-xl-12">
        <div class="section-header-wrapper">
          <div class="section-header">
            <h2 class="section-title"><?php echo esc_html($attributes['title']); ?></h2>
            <p>
                <?php echo esc_html($attributes['subtitle']); ?>
            </p>
          </div>
          <div class="slider-nav-area">
            <div
              class="slider-prev"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
            >
              <i class="fas fa-chevron-left"></i>
            </div>
            <div
              class="slider-next"
              tabindex="0"
              role="button"
              aria-label="Next slide"
            >
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-xl-12">
        <div class="free-product-slider-area">
          <div class="trending-product-slider swiper-container-horizontal">
            <div
              class="swiper-wrapper"
              style="
                transform: translate3d(-2280px, 0px, 0px);
                transition-duration: 0ms;
              "
            >
            <?php
                $product_ids = [];
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
                        }
            ?>
                        <div
                            class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                            data-swiper-slide-index="1"
                            style="width: 540px; margin-right: 30px"
                        >
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
                                                if ($key == 0 ) break;
                                            }
                                        }
                                    ?>

                                    <div class="product-footer-area">
                                        <div class="left">
                                            <span class="sale">Sales : <?php echo esc_html($sales); ?></span>
                                        </div>
                                        <div class="right">
                                          <?php global $product; ?>
                                            <span class="price">Price : $<?php echo $product->get_regular_price(); ?></span>
                                            <span class="price">Price : $<?php echo $cost; ?></span>
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
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
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