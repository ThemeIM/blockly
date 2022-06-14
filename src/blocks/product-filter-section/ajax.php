<?php 

function blockly_prodcut_filter_ajax_enqueue_script() {   
    wp_enqueue_script( 'product_filter_ajax', plugin_dir_url( __FILE__ ) . 'ajax-script/ajax.js', [ 'jquery' ] );
    wp_localize_script( 'product_filter_ajax', 'blockly_product_filter',
        array( 
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'nonce' => wp_create_nonce('blockly-filter-nonce')
        )
    );
}
add_action('wp_enqueue_scripts', 'blockly_prodcut_filter_ajax_enqueue_script');


add_action( 'wp_ajax_blockly_product_filter', 'blockly_product_filter' );
add_action( 'wp_ajax_nopriv_blockly_product_filter', 'blockly_product_filter' );

function blockly_product_filter(){
    if ( ! wp_verify_nonce( $_POST['nonce'], 'blockly-filter-nonce' ) ) {
        die ( 'Busted!');
    }
       ?>
   <div class="ajax-preloader position-absolute">
        <div class="loader"></div>
    </div>    
   <div class="tab-content" id="nav-tabContent">
       <?php 
        
        $children = get_terms( 'product_cat', array(
            'parent'    => $_POST['cat'],
            'hide_empty' => false
        ) );
        if((is_array($children)) && !empty($children)):
       ?>
       <nav class="product-inner-tab">
        <div class="responsive-nav-two d-block d-lg-none">Category</div>
        <div class="nav nav-tabs res-nav-tab-two" id="nav-tab" role="tablist">
            <?php foreach($children as $child) :  ?>
            <button data-cat="<?php echo esc_attr($child->term_id) ?>" class="nav-link" id="creative-tab-<?php echo esc_attr($child->term_id) ?>" data-toggle="tab"  type="button" role="tab" aria-controls="<?php echo esc_attr($child->name) ?>" aria-selected="true"><?php echo esc_html($child->name); ?></button>
            <?php endforeach; ?>
        </div>
      </nav>
      <?php endif; ?>
    <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="portfolio" role="tabpanel" aria-labelledby="portfolio-tab">
                <div class="row justify-content-center mb-30-none">
                    <?php 
                    if(!is_numeric($_POST['cat']) && 'all' != $_POST['cat']){
                        $loop = new \WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => 6,
                            'order' => 'ASC'
                        ]);
                    }elseif(!is_numeric($_POST['cat']) && 'new' != $_POST['cat']){
                        $loop = new \WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => 6,
                        ]);
                    }else{
                        $loop = new \WP_Query([
                            'post_type' => 'product',
                            'posts_per_page' => 6,
                            'tax_query' => array(
                                array(
                                    'taxonomy' => 'product_cat',
                                    'terms' => $_POST['cat'],
                                    'field' => 'id',
                                )
                            ),
                        ]);
                    }
                    
                    
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
                    <?php endwhile; }wp_reset_postdata(); ?>
                </div>
                
            </div>
        </div>
    </div>
</div>
   <?php 
}