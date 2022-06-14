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
                ]
                );

            } else{
            $paged = $_POST['paged'];
            if(isset($_POST['cat']) && !empty($_POST['cat'])){
                $args = array(
                    'post_type' => 'product',
                    'posts_per_page' => 12,
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
                    'posts_per_page' => 12,
                    'paged' => $paged,
                    'orderby' => (isset($_POST['orderby']) && !empty($_POST['orderby'])) ? $_POST['orderby'] : 'none',
                    'order'   => 'DESC',
                );  
            }
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


    function themeim_paginate_links( $args = '' ) {
        global $wp_query, $wp_rewrite;
    
        // Setting up default values based on the current URL.
        $pagenum_link = html_entity_decode( get_pagenum_link() );
        $url_parts    = explode( '?', $pagenum_link );
    
        // Get max pages and current page out of the current query, if available.
        $total   = isset( $wp_query->max_num_pages ) ? $wp_query->max_num_pages : 1;
        $current = get_query_var( 'paged' ) ? (int) get_query_var( 'paged' ) : 1;
    
        // Append the format placeholder to the base URL.
        $pagenum_link = trailingslashit( $url_parts[0] ) . '%_%';
    
        // URL base depends on permalink settings.
        $format  = $wp_rewrite->using_index_permalinks() && ! strpos( $pagenum_link, 'index.php' ) ? 'index.php/' : '';
        $format .= $wp_rewrite->using_permalinks() ? user_trailingslashit( $wp_rewrite->pagination_base . '/%#%', 'paged' ) : '?paged=%#%';
    
        $defaults = array(
            'base'               => $pagenum_link, // http://example.com/all_posts.php%_% : %_% is replaced by format (below).
            'format'             => $format, // ?page=%#% : %#% is replaced by the page number.
            'total'              => $total,
            'current'            => $current,
            'aria_current'       => 'page',
            'show_all'           => false,
            'prev_next'          => true,
            'prev_text'          => __( '&laquo; Previous' ),
            'next_text'          => __( 'Next &raquo;' ),
            'end_size'           => 1,
            'mid_size'           => 2,
            'type'               => 'plain',
            'add_args'           => array(), // Array of query args to add.
            'add_fragment'       => '',
            'before_page_number' => '',
            'after_page_number'  => '',
        );
    
        $args = wp_parse_args( $args, $defaults );
    
        if ( ! is_array( $args['add_args'] ) ) {
            $args['add_args'] = array();
        }
    
        // Merge additional query vars found in the original URL into 'add_args' array.
        if ( isset( $url_parts[1] ) ) {
            // Find the format argument.
            $format       = explode( '?', str_replace( '%_%', $args['format'], $args['base'] ) );
            $format_query = isset( $format[1] ) ? $format[1] : '';
            wp_parse_str( $format_query, $format_args );
    
            // Find the query args of the requested URL.
            wp_parse_str( $url_parts[1], $url_query_args );
    
            // Remove the format argument from the array of query arguments, to avoid overwriting custom format.
            foreach ( $format_args as $format_arg => $format_arg_value ) {
                unset( $url_query_args[ $format_arg ] );
            }
    
            $args['add_args'] = array_merge( $args['add_args'], urlencode_deep( $url_query_args ) );
        }
    
        // Who knows what else people pass in $args.
        $total = (int) $args['total'];
        if ( $total < 2 ) {
            return;
        }
        $current  = (int) $args['current'];
        $end_size = (int) $args['end_size']; // Out of bounds? Make it the default.
        if ( $end_size < 1 ) {
            $end_size = 1;
        }
        $mid_size = (int) $args['mid_size'];
        if ( $mid_size < 0 ) {
            $mid_size = 2;
        }
    
        $add_args   = $args['add_args'];
        $r          = '';
        $page_links = array();
        $dots       = false;
    
        if ( $args['prev_next'] && $current && 1 < $current ) :
            $link = str_replace( '%_%', 2 == $current ? '' : $args['format'], $args['base'] );
            $link = str_replace( '%#%', $current - 1, $link );
            if ( $add_args ) {
                $link = add_query_arg( $add_args, $link );
            }
            $link .= $args['add_fragment'];
    
            $page_links[] = sprintf(
                '<a class="prev page-numbers" href="%s" data-page="%s">%s</a>',
                /**
                 * Filters the paginated links for the given archive pages.
                 *
                 * @since 3.0.0
                 *
                 * @param string $link The paginated link URL.
                 */
                esc_url( apply_filters( 'paginate_links', $link ) ),
                $current,
                $args['prev_text']
            );
        endif;
    
        for ( $n = 1; $n <= $total; $n++ ) :
            if ( $n == $current ) :
                $page_links[] = sprintf(
                    '<span aria-current="%s" class="page-numbers current">%s</span>',
                    esc_attr( $args['aria_current'] ),
                    $args['before_page_number'] . number_format_i18n( $n ) . $args['after_page_number']
                );
    
                $dots = true;
            else :
                if ( $args['show_all'] || ( $n <= $end_size || ( $current && $n >= $current - $mid_size && $n <= $current + $mid_size ) || $n > $total - $end_size ) ) :
                    $link = str_replace( '%_%', 1 == $n ? '' : $args['format'], $args['base'] );
                    $link = str_replace( '%#%', $n, $link );
                    if ( $add_args ) {
                        $link = add_query_arg( $add_args, $link );
                    }
                    $link .= $args['add_fragment'];
    
                    $page_links[] = sprintf(
                        '<a class="page-numbers" href="%s" data-page="%s">%s</a>',
                        /** This filter is documented in wp-includes/general-template.php */
                        esc_url( apply_filters( 'paginate_links', $link ) ),
                        number_format_i18n( $n ),
                        $args['before_page_number'] . number_format_i18n( $n ) . $args['after_page_number']
                    );
    
                    $dots = true;
                elseif ( $dots && ! $args['show_all'] ) :
                    $page_links[] = '<span class="page-numbers dots">' . __( '&hellip;' ) . '</span>';
    
                    $dots = false;
                endif;
            endif;
        endfor;
    
        if ( $args['prev_next'] && $current && $current < $total ) :
            $link = str_replace( '%_%', $args['format'], $args['base'] );
            $link = str_replace( '%#%', $current + 1, $link );
            if ( $add_args ) {
                $link = add_query_arg( $add_args, $link );
            }
            $link .= $args['add_fragment'];
    
            $page_links[] = sprintf(
                '<a class="next page-numbers" href="%s" data-page="%s">%s</a>',
                /** This filter is documented in wp-includes/general-template.php */
                esc_url( apply_filters( 'paginate_links', $link ) ),
                $current,
                $args['next_text']
            );
        endif;
    
        switch ( $args['type'] ) {
            case 'array':
                return $page_links;
    
            case 'list':
                $r .= "<ul class='page-numbers'>\n\t<li>";
                $r .= implode( "</li>\n\t<li>", $page_links );
                $r .= "</li>\n</ul>\n";
                break;
    
            default:
                $r = implode( "\n", $page_links );
                break;
        }
    
        /**
         * Filters the HTML output of paginated links for archives.
         *
         * @since 5.7.0
         *
         * @param string $r    HTML output.
         * @param array  $args An array of arguments. See paginate_links()
         *                     for information on accepted arguments.
         */
        $r = apply_filters( 'paginate_links_output', $r, $args );
    
        return $r;
    }

