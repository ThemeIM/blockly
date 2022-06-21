<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_product_filter')) {
    function blockly_register_product_filter() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-filter-section', 
            array(
                'attributes'      => array(
                    'categories' => [
                        'type' => 'array',
                        'default' => []
                    ],
                ),
                'render_callback' => 'blockly_render_product_filter',
            )
        );
    }
}

add_action( 'init', 'blockly_register_product_filter' );

if (!function_exists('blockly_render_product_filter')) {
    function blockly_render_product_filter( $attributes ) {
        ob_start();  ?>

<section class="product-section ptb-120 bg--gray" style="max-width: 100%;">
    <div class="container custom-container">
        <div class="product-tab">
            <nav>
                <div class="responsive-nav d-block d-lg-none">Products</div>
                <div class="nav nav-tabs res-nav-tab" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="all-tab" data-toggle="tab" data-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true" data-cat="all">
                        <div class="product-tab-thumb">
                            <img src="<?php echo esc_url(BLY_ASSETS_URL.'/images/product-tab/product-tab-1.png'); ?>" alt="product-tab">
                        </div>
                        <span>All Items</span>
                    </button>
                    <button class="nav-link" id="new-tab" data-toggle="tab" data-target="#new" type="button" role="tab" aria-controls="new" aria-selected="false" data-cat="new">
                        <div class="product-tab-thumb">
                            <img src="<?php echo esc_url(BLY_ASSETS_URL.'/images/product-tab/product-tab-2.png'); ?>" alt="product-tab">
                        </div>
                        <span>New Items</span>
                    </button>
                    <?php if(isset($attributes['categories']) && !empty($attributes['categories'])){ ?>
                    <?php foreach($attributes['categories'] as $cat) { ?>
                        <button class="nav-link" data-cat="<?php echo esc_attr($cat['value']) ?>" id="wordpress-tab-<?php echo esc_attr($cat['value']) ?>" data-toggle="tab" type="button" role="tab" aria-controls="<?php echo esc_attr($cat['label']); ?>">
                            <div class="product-tab-thumb">
                                <?php    
                                 $thumbnail_id = get_term_meta( $cat['value'], 'thumbnail_id', true ); 
                                 if('' != $thumbnail_id) {
                                    echo wp_get_attachment_image($thumbnail_id, ['65', '65']);
                                 }
                                ?>
                                
                            </div>
                            <span><?php echo esc_html($cat['label']); ?></span>
                        </button>
                  <?php }}  ?>
                </div>
            </nav>
            <div class="section-wrapper position-relative ajax-content-load">
                <div class="ajax-preloader position-absolute">
                    <div class="loader"></div>
                </div>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
                            <div class="row justify-content-center mb-30-none">
                                <?php 
                                
                                $loop = new \WP_Query([
                                    'post_type' => 'product',
                                    'posts_per_page' => 6,
                                    'tax_query' => [
                                        [
                                            'taxonomy' => 'product_cat',
                                            'field'    => 'slug',
                                            'terms'    => array( 'additional-services', 'theme-customization-options' ),
                                            'operator' => 'NOT IN'
                                        ]
                                    ]
                                ]);
                                if($loop->have_posts()){
                                    while($loop->have_posts()) : $loop->the_post();
                                    $get_themeim_meta = get_post_meta(get_the_ID(), 'themeim_product_options', true);
                                    $data['product_id'] = isset($get_themeim_meta['_themeforest_id']) ? $get_themeim_meta['_themeforest_id'] : '';
                                    $product_info = '';
                                    if (class_exists('Themeim_API_INIT')) {
                                        $product_info = Themeim_API_INIT::get_themeforest_info_from_cache($data); 
                                    }
                                    $is_woocommerce = (isset($get_themeim_meta['_themeforest_id']) && '' != (isset($get_themeim_meta['_themeforest_id']) && $get_themeim_meta['_themeforest_id'] != '')) ? false : true;
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
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                    <div class="product-item">
                                        <div class="product-badge">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div class="product-thumb">
                                        <?php 
                                        if(has_post_thumbnail()){
                                            the_post_thumbnail('product_filter_430x300');
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
                                        <h3 class="title"><a href="<?php the_permalink(); ?>"><?php echo esc_html($get_short_title); ?></a></h3>
                                        <p>
                                            <?php if(isset($get_themeim_meta['_details_title'])){
                                                $sub_title_data = wp_trim_words($get_themeim_meta['_details_title'], 7, '...');
                                                echo  esc_html($sub_title_data);
                                            } ?>
                                        </p>    
                                        <div class="product-footer-area">
                                            <div class="left">
                                                <?php 
                                                    $terms = get_the_terms( get_the_ID(), 'product_cat' ); 
                                                    if((is_array($terms) || is_object($terms)) && !empty($terms)){
                                                        foreach($terms as $key=>$cat){
                                                            printf("<span class='category'><a href='%s'>In %s</a></span>",get_term_link($cat->slug, $cat->taxonomy), $cat->name);
                                                            if($key == 0 ){
                                                                break;
                                                            }
                                                        }
                                                    }
                                    ?>
                            </div>
                            <div class="right">
                                <span class="sale">Sales : <?php echo esc_html($sales); ?></span>
                                <span class="price">$<?php echo esc_html($cost); ?></span>
                            </div>
                        </div>
                    </div>
                                    </div>
                                </div>
                                <?php endwhile; }wp_reset_postdata(); ?>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
             <div class="all-btn text-center mt-60">
                 <a href="/shop" class="btn--base active">Browse All Resources <i class="las la-angle-right"></i></a>
             </div>
            </div>
        </div>
    </div>
</section>
        <?php return ob_get_clean(); 
    }
}
