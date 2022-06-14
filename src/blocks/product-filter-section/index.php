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
                    'products' => [
                        'type' => 'array',
                        'default' => []
                    ]
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

<section class="product-section ptb-120 bg--gray blockly-full">
    <div class="container custom-container">
        <div class="product-tab">
            <nav>
                <div class="responsive-nav d-block d-lg-none">Products</div>
                <div class="nav nav-tabs res-nav-tab" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="all-tab" data-toggle="tab" data-target="#all" type="button" role="tab" aria-controls="all" aria-selected="true">
                        <div class="product-tab-thumb">
                            <img src="<?php echo esc_url(BLY_ASSETS_URL) ?>assets/images/product-tab/product-tab-1.png" alt="product-tab">
                        </div>
                        <span>All Items</span>
                    </button>
                    <button class="nav-link" id="new-tab" data-toggle="tab" data-target="#new" type="button" role="tab" aria-controls="new" aria-selected="false">
                        <div class="product-tab-thumb">
                            <img src="<?php echo esc_url(BLY_ASSETS_URL) ?>assets/images/product-tab/product-tab-2.png" alt="product-tab">
                        </div>
                        <span>New Items</span>
                    </button>
                    <?php
                        if (!empty($attributes['categories'])) {
                            foreach ($attributes['categories'] as $key => $category) {
                    ?>
                                <button class="nav-link" id="wordpress-tab" data-id="<?php echo $category['name']; ?>" data-toggle="tab" data-target="#wordpress" type="button" role="tab" aria-controls="wordpress" aria-selected="false">
                                    <div class="product-tab-thumb">
                                        <img src="<?php echo esc_url(BLY_ASSETS_URL) ?>assets/images/product-tab/product-tab-3.png" alt="product-tab">
                                    </div>
                                    <span><?php echo $category['name']; ?></span>
                                </button>
                    <?php
                            }
                        }
                    ?>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                    <!-- <nav class="product-inner-tab">
                        <div class="responsive-nav-two d-block d-lg-none">Category</div>
                        <div class="nav nav-tabs res-nav-tab-two" id="nav-tab" role="tablist">
                            <button class="nav-link" id="portfolio-tab" data-toggle="tab" data-target="#portfolio" type="button" role="tab" aria-controls="portfolio" aria-selected="true">Portfolio</button>
                            <button class="nav-link" id="creative-tab" data-toggle="tab" data-target="#creative" type="button" role="tab" aria-controls="creative" aria-selected="true">Creative</button>
                            <button class="nav-link" id="education-tab" data-toggle="tab" data-target="#education" type="button" role="tab" aria-controls="education" aria-selected="true">Education</button>
                            <button class="nav-link" id="technology-tab" data-toggle="tab" data-target="#technology" type="button" role="tab" aria-controls="technology" aria-selected="true">Technology</button>
                            <button class="nav-link" id="blog-tab" data-toggle="tab" data-target="#blog" type="button" role="tab" aria-controls="blog" aria-selected="true">Blog &amp; Magazine</button>
                            <button class="nav-link active" id="corporate-tab" data-toggle="tab" data-target="#corporate" type="button" role="tab" aria-controls="corporate" aria-selected="true">Corporate</button>
                            <button class="nav-link" id="eCommerce-tab" data-toggle="tab" data-target="#eCommerce" type="button" role="tab" aria-controls="eCommerce" aria-selected="true">eCommerce</button>
                            <button class="nav-link" id="estate-tab" data-toggle="tab" data-target="#estate" type="button" role="tab" aria-controls="estate" aria-selected="true">Real Estate</button>
                            <button class="nav-link" id="entertainment-tab" data-toggle="tab" data-target="#entertainment" type="button" role="tab" aria-controls="entertainment" aria-selected="true">Entertainment</button>
                            <button class="nav-link" id="health-tab" data-toggle="tab" data-target="#health" type="button" role="tab" aria-controls="health" aria-selected="true">Health &amp; Beauty</button>
                            <button class="nav-link" id="restaurants-tab" data-toggle="tab" data-target="#restaurants" type="button" role="tab" aria-controls="restaurants" aria-selected="true">Restaurants &amp; Cafes</button>
                            <button class="nav-link" id="profit-tab" data-toggle="tab" data-target="#profit" type="button" role="tab" aria-controls="profit" aria-selected="true">Non Profit</button>
                        </div>
                    </nav> -->
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade" id="product_container" role="tabpanel" aria-labelledby="portfolio-tab">
                            <!-- tab-pane fade show active -->
                            <div class="row justify-content-center mb-30-none">
                                <?php
                                    if (!empty($attributes['categories'])) {
                                        foreach ($attributes['categories'] as $key => $category) {
                                ?>
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                        <div class="product-item">
                                            <div class="product-badge">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div class="product-thumb">
                                                <img src="assets/images/product/product-1.png" alt="product">
                                                <div class="product-thumb-overlay">
                                                    <div class="product-overlay-btn">
                                                        <a href="#0" class="btn--base active">PREVIEW</a>
                                                        <a href="#0" class="btn--base">DETAILS</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-content">
                                                <h4 class="title"><a href="product-details.html">Evenio - Event Conference WordPress...</a></h4>
                                                <span class="category">creative</span>
                                                <div class="product-footer-area">
                                                    <div class="left">
                                                        <span class="sale">Sales : 125</span>
                                                    </div>
                                                    <div class="right">
                                                        <span class="price">Price : $69</span>
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
                            <div class="all-btn text-center mt-60">
                                <a href="product.html" class="btn--base active">Browse All Resources <i class="las la-angle-right"></i></a>
                            </div>
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
