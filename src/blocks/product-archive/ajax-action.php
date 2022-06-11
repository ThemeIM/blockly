<?php 

function blockly_prodcut_lising_ajax_enqueue_script() {   
    wp_enqueue_script( 'product_listing_ajax', plugin_dir_url( __FILE__ ) . 'ajax-script/ajax.js', [ 'jquery' ] );
    wp_localize_script( 'product_listing_ajax', 'blockly_product',
        array( 
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce('blockly-product-nonce')
        )
    );
}
add_action('wp_enqueue_scripts', 'blockly_prodcut_lising_ajax_enqueue_script');


add_action( 'wp_ajax_blockly_product_listing', 'blockly_product_listing' );
add_action( 'wp_ajax_nopriv_blockly_product_listing', 'blockly_product_listing' );

function blockly_product_listing() {
    if ( ! wp_verify_nonce( $_POST['nonce'], 'blockly-product-nonce' ) ) {
        die ( 'Busted!');
    }
    ?>
     <div class="ajax-preloader position-absolute">
        <div class="loader"></div>
    </div>
    <div class="tab-pane fade show active" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
        <div class="row justify-content-center mb-30-none">
            <?php 
             echo '<pre>';
             print_r($_POST['orderby']);
             echo '</pre>';
            $paged = $_POST['paged'];
            if(isset($_POST['cat']) && !empty($_POST['cat'])){
                $args = array(
                    'post_type' => 'product',
                    'posts_per_page' => 4,
                    'paged' => $paged,
                    'order'   => 'DESC',
                    'orderby' => (isset($_POST['orderby']) && !empty($_POST['orderby'])) ? $_POST['orderby'] : 'none',
                    'tax_query' => [
                        [
                            'taxonomy' => 'product_cat',
                               'terms' => $_POST['cat'],
                               'field' => 'id',
                        ]
                    ]
                    );
            }else{
                $args = array(
                    'post_type' => 'product',
                    'posts_per_page' => 4,
                    'paged' => $paged,
                    'orderby' => (isset($_POST['orderby']) && !empty($_POST['orderby'])) ? $_POST['orderby'] : 'none',
                    'order'   => 'DESC',
                );  
            }

            $loop = new \WP_Query($args);
            if($loop ->have_posts()){
                while($loop->have_posts()) : $loop->the_post();
                $get_themeim_meta = get_post_meta(get_the_ID(), 'themeim_product_options', true);
                $data['product_id'] = isset($get_themeim_meta['_themeforest_id'])? $get_themeim_meta['_themeforest_id']: '';
                $product_info = '';
                if(class_exists('Themeim_API_INIT')){
                $product_info = Themeim_API_INIT::get_themeforest_info($data); 
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
                        <h4 class="title"><a href="<?php the_permalink(); ?>"><?php echo esc_html($get_short_title); ?></a></h4>
                        <?php 
                            
                            $terms = get_the_terms( get_the_ID(), 'product_cat' ); 

                            if((is_array($terms) || is_object($terms)) && !empty($terms)){
                                foreach($terms as $key=>$cat){
                                printf("<span class='category'>In %s</span>",$cat->name);
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
                                <span class="price">Price : $<?php echo esc_html($cost); ?></span>
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
                    'current' => max( 1, $paged ),
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
    <?php 
    wp_die();
}