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
       
       
       $current = get_queried_object();
       $get_current_cat_by_url =  isset($_GET['cat']) ? $_GET['cat'] : '';
       $taxomomy_id = $current->parent ? $current->parent : $current->term_id;
       $current_taxonomy_id = $taxomomy_id ? $taxomomy_id : $get_current_cat_by_url;
        
       $cat_name = ''; 
       $cat_description = '';
       $get_current_cat_item = get_term_by('id', $current_taxonomy_id, 'product_cat');
       $get_current_cat_id = isset($get_current_cat_item->term_id) ? $get_current_cat_item->term_id : '';
       $cat_name = isset($get_current_cat_item->name) ? $get_current_cat_item->name : '';
       $cat_description = isset($get_current_cat_item->description) ? $get_current_cat_item->description : '';
       //  get sub cat 
       $get_sub_cat = '';
       if(isset($_GET['sub_cat'])) {
        $get_sub_cat = get_term_by('id', $_GET['sub_cat'], 'product_cat');
       }elseif(isset($current->term_id)) {
        $get_sub_cat = get_term_by('id', $current->term_id, 'product_cat');
       }
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
                                        <option value="title" selected>Title</option>
                                        <option value="date">New</option>
                                        <option value="name">Top</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <form action="" name="advance_filter" class="blockly-advance-filter" method="GET">
                    <div class="product-filter-widget-area">
                        <div class="product-top-option-area">
                            <div class="product-top-option-content">
                                <p><span class="text--base">*</span>You can select multiple options</p>
                            </div>
                            <div class="product-top-option-btn">
                                <button class="clear" type="reset">Clear</button>
                                <button class="advance-apply" type="submit" name="advance-filter">Apply</button>
                            </div>
                        </div>
                        <div class="product-filter-widget-wrapper">
                            <div class="product-filter-widget">
                                <h4 class="title">Labels</h4>
                                <div class="product-filter-widget-list">
                                    <?php 
                                     $get_labels = array(
                                        'taxonomy' => 'label',
                                        'hide_empty' => false,
                                    );
                                    $get_labels_data = get_terms($get_labels);
                                    ?>
                                    <?php foreach($get_labels_data as $list){ ?>
                                    <div class="form-group custom-check-group">
                                        <input type="checkbox" id="level-<?php echo esc_attr($list->term_id) ?>" name="labels" value="<?php echo esc_attr($list->slug); ?>">
                                        <label for="level-<?php echo esc_attr($list->term_id) ?>"><?php echo esc_html($list->name); ?></label>
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="product-filter-widget">
                                <h4 class="title">Categories</h4>
                                <?php 
                                unset($args);
                              
                                $ad_get_more_cat = get_terms( 'product_cat', array(
                                    'hide_empty' => false,
                                    'child_of'   => $get_current_cat_id,
                                  ) ) ?>
                                <div class="product-filter-widget-list">
                                    <?php foreach($ad_get_more_cat as $ad_cat){ ?>
                                    <div class="form-group custom-check-group">
                                        <input type="checkbox" id="level-<?php echo esc_attr($ad_cat->term_id) ?>" value="<?php echo esc_attr($ad_cat->slug); ?>" name="advance-cat">
                                        <label for="level-<?php echo esc_attr($ad_cat->term_id) ?>"><?php echo esc_html($ad_cat->name); ?></label>
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="product-filter-widget">
                                <h4 class="title">Tags</h4>
                                <div class="product-filter-widget-list">
                                    <?php 
                                    $ad_product_tags = array(
                                        'taxonomy' => 'product_tag',
                                        'hide_empty' => false,
                                    );
                                    $ad_get_more_tags = get_terms($ad_product_tags);
                                    ?>
                                    <?php foreach($ad_get_more_tags as $ad_tags){ ?>
                                    <div class="form-group custom-check-group">
                                        <input type="checkbox" id="level-<?php echo esc_attr($ad_tags->term_id) ?>" value="<?php echo esc_attr($ad_tags->slug); ?>" name="advance-tags">
                                        <label for="level-<?php echo esc_attr($ad_tags->term_id) ?>"><?php echo esc_html($ad_tags->name); ?></label>
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>
                            <div class="product-filter-widget">
                                <h4 class="title">Popular features</h4>
                                <?php 
                                    $ad_product_feature = array(
                                        'taxonomy' => 'features',
                                        'hide_empty' => false,
                                    );
                                    $ad_get_more_feature = get_terms($ad_product_feature);
                                    ?>
                                <div class="product-filter-widget-list">
                                <?php foreach($ad_get_more_feature as $ad_feature){ ?>
                                    <div class="form-group custom-check-group">
                                        <input type="checkbox" id="level-<?php echo esc_attr($ad_feature->term_id) ?>" value="<?php echo esc_attr($ad_feature->slug); ?>" name="advane-feature">
                                        <label for="level-<?php echo esc_attr($ad_feature->term_id) ?>"><?php echo esc_html($ad_feature->name); ?></label>
                                    </div>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
               </form>
                <?php $data_parent = (isset($current->parent) && !$current->parent) ? $current->term_id:''; ?>
                <div class="tab-content" id="nav-tabContent" data-parent="<?php echo esc_attr($data_parent); ?>">
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
