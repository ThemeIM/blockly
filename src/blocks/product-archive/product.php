<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_product_list')):
    function blockly_register_product_list() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-archive', 
            array(
                'attributes'      => array(
                    'numberOfPosts'  => array(
                        'type'    =>'number',
                        'default' => 9
                    ),
                    'order' =>array(
                        'type'   => 'string',
                        'default'=> 'desc'
                    ),
                    'orderBy' =>array(
                        'type'    => 'string',
                        'default' => 'date'
                    ),
                ),
                'render_callback' => 'blockly_render_product_list',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_product_list' );

//render fornt end alert box 
if(!function_exists('blockly_render_product_list')):
    function blockly_render_product_list( $attributes ) {
        ob_start();  ?>
        <section class="page-wrapper-section">
    <div class="page-wrapper-element">
        <img src="<?php echo esc_url(BLY_ASSETS_URL.'/images/element/element-22.png') ?>" alt="element">
    </div>
    <div class="product-section product-section-two">
        <div class="container custom-container">
            <div class="product-category-banner">
                <div class="product-category-banner-content">
                    <div class="product-category-banner-icon">
                        <img src="<?php echo esc_url($attributes['page_image'] ?? ''); ?>" alt="product-tab">
                    </div>
                    <h2 class="title"><?php echo esc_html($attributes['page_title'] ?? ''); ?></h2>
                    <h4 class="sub-title"><?php echo esc_html($attributes['page_subtitle'] ?? ''); ?></h4>
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
                        <div class="selected-cat d-none" data-scat=""></div>
                        <?php
                            $get_current_cat = [];
                            $categories = is_array($attributes['selected_categories']) ? $attributes['selected_categories'] : [];
                           
                            if (!empty($categories)) {
                                foreach($categories as $key=>$cat) {
                        ?>
                                    <button class="nav-link" data-cat="<?php echo esc_attr($cat['value']) ?>">
                                        <?php echo esc_html($cat['label']); ?>
                                    </button>
                        <?php
                                    array_push($get_current_cat, $cat['value']);
                                    if ($key ==3) {
                                        break;
                                    }
                                }
                            }
                        ?>
                        <div class="product-tab-select">
                            <?php
                            $get_more_cat = is_array($attributes['more_categories']) ? $attributes['more_categories'] : [];
                            ?>
                            <ul class="custom-select-box">
                                <li class="selected">
                                    More
                                </li>
                                <?php
                                    if(!empty($get_more_cat)) {
                                        foreach($get_more_cat as $cat) {
                                ?>
                                    <li>
                                        <button data-cat="<?php echo esc_attr($cat['value']) ?>">
                                            <?php echo esc_html($cat['label']); ?>
                                        </button>
                                    </li>
                                <?php
                                        }
                                    } 
                                ?>
                            </ul>
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
                                    <select class="form--control blockly_current_order">
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
                                     $ad_product_cat = array(
                                        'taxonomy' => 'product_cat',
                                        'hide_empty' => true,
                                    );
                                    $ad_get_more_cat = get_terms($ad_product_cat);
                                    ?>
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
                <div class="tab-content ajax-content-load position-relative" id="nav-tabContent">
                    <div class="ajax-preloader position-absolute">
                        <div class="loader"></div>
                    </div>
                    <div class="tab-pane fade show active" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
                        <div class="row justify-content-center mb-30-none">
                           <?php 
                           $paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
                           $args = array(
                            'post_type' => 'product',
                            'posts_per_page' => 12,
                            'paged' => $paged,
                            'tax_query' => [
                                [
                                    'taxonomy' => 'product_cat',
                                    'field'    => 'slug',
                                    'terms'    => array( 'additional-services', 'theme-customization-options' ),
                                    'operator' => 'NOT IN'
                                ]
                            ]
                            );

                            $loop = new \WP_Query($args);
                           if($loop ->have_posts()){
                               while($loop->have_posts()) : $loop->the_post();
                               $get_themeim_meta = get_post_meta(get_the_ID(), 'themeim_product_options', true);
                                $data['product_id'] = isset($get_themeim_meta['_themeforest_id'])? $get_themeim_meta['_themeforest_id']: '';
                                $product_info = '';
                                if (class_exists('Themeim_API_INIT')) {
                                    $product_info = Themeim_API_INIT::get_themeforest_info_from_cache($data); 
                                }        
                                $product_item = isset($product_info->item) ? $product_info->item: '';
                                $cost = $sales = $preview = '';
                                if('' != $product_item){
                                    $cost = isset($product_item->cost) ? $product_item->cost : '';
                                    $sales = isset($product_item->sales) ? $product_item->sales : '';
                                    $preview = isset($product_item->url) ? $product_item->url : '';
                                }
                           ?>  
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
                                <div class="product-item">
                                    <div class="product-badge">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div class="product-thumb">
                                        <?php if(has_post_thumbnail()){
                                            the_post_thumbnail('product_image_360x225');
                                        } ?>
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
                            <?php endwhile; }else{ echo "No product Found In this cituria"; } ?>
                        </div>
                        <?php if($loop->max_num_pages > 1){ ?>
                        <nav class="blockly-ajax-pagination">
                        <?php
                                $big = 999999999; // need an unlikely integer
                                
                                echo themeim_paginate_links( array(
                                    'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                                    'format' => '?paged=%#%',
                                    'current' => max( 1, get_query_var('paged') ),
                                    'total' => $loop->max_num_pages,
                                    'type'  => 'list',
                                    'prev_text'          => __( '&laquo;' ),
		                            'next_text'          => __( '&raquo;' ),
                                ) );
                                ?>
                        </nav>
                        <?php } ?>
                        <?php wp_reset_postdata(); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        <?php return ob_get_clean(); 
    }
endif;