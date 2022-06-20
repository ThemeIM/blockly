<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_product_filter_cat')) {
    function blockly_register_product_filter_cat() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-cat-filter-section', 
            array(
                'attributes'      => array(
                    'categories' => [
                        'type' => 'array',
                        'default' => []
                    ],
                ),
                'render_callback' => 'blockly_render_product_filter_cat',
            )
        );
    }
}

add_action( 'init', 'blockly_register_product_filter_cat' );

if (!function_exists('blockly_render_product_filter_cat')) {
    function blockly_render_product_filter_cat( $attributes ) {
        if(!isset($_GET['cat'])) {
            return;
        }
       $cat_name = ''; 
       $cat_description = '';
       $get_current_cat_item = get_term_by('name', $_GET['cat'], 'product_cat');
       $get_current_cat_id = isset($get_current_cat_item->term_id) ? $get_current_cat_item->term_id : '';
       $cat_name = isset($get_current_cat_item->name) ? $get_current_cat_item->name : '';
       $cat_description = isset($get_current_cat_item->description) ? $get_current_cat_item->description : '';
       //  get sub cat 
       $get_sub_cat = '';
       if(isset($_GET['sub_cat'])) {
        $get_sub_cat = get_term_by('name', $_GET['sub_cat'], 'product_cat');
       }
       echo '<pre>';
       print_r($get_sub_cat);
       echo '</pre>';
       

        ob_start();  ?>

<div class="page-wrapper-section" style="max-width: 100%">
    <div class="page-wrapper-element">
    <img src="<?php echo esc_url(BLY_ASSETS_URL.'/images/element/element-22.png') ?>" alt="element">
    </div>
    <div class="product-section product-section-two">
        <div class="container custom-container">
            <div class="product-category-banner">
                <div class="product-category-banner-content">
                <?php if('' != $get_current_cat_id): 
                         $cat_image_id = get_term_meta( $get_current_cat_id, 'thumbnail_id', true ); 

                    ?>
                <div class="product-category-banner-icon">
                    <?php echo wp_get_attachment_image( $cat_image_id, 'thumbnail'); ?>
                </div>
                <?php endif; ?>
                    
                    <h2 class="title"><?php echo esc_html($cat_name); ?></h2>
                    <h4 class="sub-title">
                        <?php echo esc_html($cat_description); ?>
                    </h4>
                </div>
                <div class="product-category-search-area">
                    <form class="product-search-form" role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
                        <input type="text" class="form--control" placeholder="Search Item" value="<?php echo get_search_query(); ?>" name="s">
                        <button type="submit" class="submit-btn"><img src="<?php echo esc_url(BLY_ASSETS_URL.'/images/icon/icon-11.png'); ?>" alt="icon"></button>
                    	<input type="hidden" name="post_type" value="product" />
                    </form>
                </div>
            </div>
            <div class="product-tab">
                <nav class="product-inner-tab">
                    <div class="responsive-nav-three d-block d-lg-none">Products</div>
                    <div class="nav nav-tabs res-nav-tab-three" id="nav-tab" role="tablist">
                        <?php
                        
                        $taxonomies = array( 
                            'taxonomy' => 'product_cat'
                        );
                        
                        $args = array(
                             'child_of'   => $get_current_cat_id,
                             'hide_empty' => false,
                        ); 
                        
                        $terms = get_terms($taxonomies, $args);
                         $get_listed_cat = [];
                        ?>
                        <?php if(!empty($terms)){ ?>
                         <?php foreach($terms as $key=> $v) { 
                             $sub_cat_term_id = isset($get_sub_cat->term_id) ? $get_sub_cat->term_id : '';
                             $button_class = ($v->term_id == $sub_cat_term_id) ? 'nav-link active' : 'nav-link  ';
                            ?>
                           <button class="<?php echo esc_attr( $button_class); ?>" id="portfolio-tab-<?php echo esc_attr($v->term_id); ?>" data-cat="<?php echo esc_attr($v->term_id); ?>"  type="button" role="tab">
                              <?php echo esc_html($v->name); 
                                array_push($get_listed_cat, $v->term_id);
                              ?>
                           </button>
                         <?php  if($key == 3 ) { break; }}} ?>
                        
                        <div class="product-tab-select">
                            <?php
                            unset($args);
                            $args = array(
                                'child_of'   => $get_current_cat_id,
                                'hide_empty' => false,
                                'exclude'    => $get_listed_cat,
                              ); 
                           
                              $terms = get_terms($taxonomies, $args);
                              if(!empty($terms)) {
                               
                            ?>
                            <select class="form--control get-cat-value">
                                <option value="">More</option>
                                <?php  foreach($terms as $term){ ?>
                                <option value="<?php echo esc_attr($term->term_id); ?>" <?php selected( $sub_cat_term_id, $term->term_id ); ?>><?php echo esc_html($term->name); ?></option>
                                <?php }} ?>
                            </select>
                        </div>
                    </div>
                    <div class="product-tab-right">
                        <div class="product-filter-wrapper">
                            <div class="product-filter-btn">
                                <a href="#0">Advance Filter</a>
                            </div>
                        </div>
                        <div class="product-sort-wrapper">
                            <div class="product-sort-btn">
                                <span class="sub-title">Short by :</span>
                                <div class="product-sort-select">
                                    <select class="form--control">
                                        <option value="1">Recent</option>
                                        <option value="2">Featured</option>
                                        <option value="3">New</option>
                                        <option value="4">Top</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="product-filter-widget-area">
                    <div class="product-top-option-area">
                        <div class="product-top-option-content">
                            <p><span class="text--base">*</span>You can select multiple options</p>
                        </div>
                        <div class="product-top-option-btn">
                            <button class="clear">Clear</button>
                            <button class="apply">Apply</button>
                        </div>
                    </div>
                    <div class="product-filter-widget-wrapper">
                        <div class="product-filter-widget">
                            <h4 class="title">Labels</h4>
                            <div class="product-filter-widget-list">
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-1">
                                    <label for="level-1">Arntech</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-2">
                                    <label for="level-2">ThemeIm</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-3">
                                    <label for="level-3">ThemeBuz</label>
                                </div>
                            </div>
                        </div>
                        <div class="product-filter-widget">
                            <h4 class="title">Categories</h4>
                            <div class="product-filter-widget-list">
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-4">
                                    <label for="level-4">Bestsellers</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-5">
                                    <label for="level-5">Freebies</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-6">
                                    <label for="level-6">WordPress Themes</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-8">
                                    <label for="level-8">Blog / Magazine</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-9">
                                    <label for="level-9">Business</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-10">
                                    <label for="level-10">Marketing</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-11">
                                    <label for="level-11">eCommerce</label>
                                </div>
                            </div>
                        </div>
                        <div class="product-filter-widget">
                            <h4 class="title">Tags</h4>
                            <div class="product-filter-widget-list">
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-12">
                                    <label for="level-12">shop</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-13">
                                    <label for="level-13">woocommerce</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-14">
                                    <label for="level-14">business</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-15">
                                    <label for="level-15">corporate</label>
                                </div>
                            </div>
                        </div>
                        <div class="product-filter-widget">
                            <h4 class="title">Popular features</h4>
                            <div class="product-filter-widget-list">
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-16">
                                    <label for="level-16">AccessPress Social Counter</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-17">
                                    <label for="level-17">Advanced Popups</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-18">
                                    <label for="level-18">All In One Addons for WPBakery Page Builder</label>
                                </div>
                                <div class="form-group custom-check-group">
                                    <input type="checkbox" id="level-19">
                                    <label for="level-19">Booked Appointments Themes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" id="nav-tabContent">
                    <div class="ajax-preloader position-absolute">
                        <div class="loader"></div>
                    </div>
                    <div class="tab-pane fade show active ajax-content-loader" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        <?php return ob_get_clean(); 
    }
}
