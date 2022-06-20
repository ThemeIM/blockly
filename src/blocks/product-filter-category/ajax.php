<?php 

function blockly_prodcut_cat_filter_ajax_enqueue_script() {   
    wp_enqueue_script( 'product_category_ajax', plugin_dir_url( __FILE__ ) . 'ajax-script/ajax.js', [ 'jquery' ] );
    wp_localize_script( 'product_category_ajax', 'blockly_product_cat_filter',
        array( 
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce('blockly-filter-cat-nonce')
        )
    );
}
add_action('wp_enqueue_scripts', 'blockly_prodcut_cat_filter_ajax_enqueue_script');


add_action( 'wp_ajax_blockly_product_filter_cat', 'blockly_product_filter_cat' );
add_action( 'wp_ajax_nopriv_blockly_product_filter_cat', 'blockly_product_filter_cat' );

function blockly_product_filter_cat(){
    if ( ! wp_verify_nonce( $_POST['nonce'], 'blockly-filter-cat-nonce' ) ) {
        die ( 'Busted!');
    } ?>

   <div class="ajax-preloader position-absolute">
        <div class="loader"></div>
    </div>    
   <div class="tab-content" id="nav-tabContent">

    <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
                <div class="row justify-content-center mb-30-none">
                    <?php 
                    echo '<pre>';
                    print_r($_POST);
                    echo '</pre>';
                    
                    $paged = ( $_POST['page'] ) ? $_POST['page'] : 1; 

                    if(isset($_POST['advance']) && $_POST['filter']){
                        $prodcut_lable = [];
                        $product_ad_cat = [];
                        $product_ad_tag = [];
                        $product_ad_feature = [];
                        foreach($_POST['filter'] as $masic){
                           if($masic['name'] == 'labels') {
                                array_push($prodcut_lable, $masic['value']); 
                           }
                           if($masic['name'] == 'advance-cat') {
                               array_push($product_ad_cat, $masic['value']); 
                          }
                          if($masic['name'] == 'advance-tags') {
                           array_push($product_ad_tag, $masic['value']); 
                            }
                            if($masic['name'] == 'advane-feature') {
                               array_push($product_ad_feature, $masic['value']); 
                                }
                        }
                        //  tax query
           
                        $args = array(
                           'paged'          => $paged, 
                           'post_type' => 'product',
                           'posts_per_page' => 12,
                           'order'   => 'DESC',
                           'orderby' => (isset($_POST['orderby']) && !empty($_POST['orderby'])) ? $_POST['orderby'] : 'none',
                           'tax_query' => [
                               'relation' => 'OR',
                               [
                                   'taxonomy' => 'label',
                                      'terms' => $prodcut_lable,
                                      'field' => 'slug',
                               ],
                               [
                                   'taxonomy' => 'features',
                                      'terms' => $product_ad_feature,
                                      'field' => 'slug',
                               ],
                               [
                                   'taxonomy' => 'product_tag',
                                      'terms' => $product_ad_tag,
                                      'field' => 'slug',
                               ],
                               [
                                   'taxonomy' => 'product_cat',
                                      'terms' => $product_ad_cat,
                                      'field' => 'slug',
                               ],
                               [
                                   'taxonomy' => 'product_cat',
                                   'field'    => 'slug',
                                   'terms'    => array( 'additional-services', 'theme-customization-options' ),
                                   'operator' => 'NOT IN'
                               ]
                           ]
                           );
                    }else{
                        $args = [
                            'paged'          => $paged, 
                            'orderby' => (isset($_POST['orderby']) && !empty($_POST['orderby'])) ? $_POST['orderby'] : 'none',
                            'post_type' => 'product',
                            'posts_per_page' => 1,
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'product_cat',
                                    'terms' => $_POST['cat'],
                                    'field' => 'id',
                                )
                            ),
                            ];
                    }

                     
                     $loop = new \WP_Query($args);
                    
                    if($loop->have_posts()){
                        while($loop->have_posts()) : $loop->the_post();
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
                <nav class="texomony-prodcut-pagination">
                    <?php 
                    
                    $big = 999999999; // need an unlikely integer
 
                    echo themeim_paginate_links( array(
                        'base'    => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                        'format'  => '?paged=%#%',
                        'current' => $_POST['page'],
                        'total'   => $loop->max_num_pages
                    ) );
                    
                    ?>
                    
                </nav>
            </div>
        </div>
    </div>
</div>
   <?php 
   wp_die();
}