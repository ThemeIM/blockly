<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_blog')):
    function blockly_register_blog() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/blog', 
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
                'render_callback' => 'blockly_render_blog',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_blog' );


//render fornt end alert box 
if(!function_exists('blockly_render_blog')):
    function blockly_render_blog( $attributes ) {
        ob_start();  ?>
            <div class="blog-section ptb-120">
    <div class="">
        <div class="blog-tab">
            
             <?php 
              $get_catatories = [];
              if(isset($attributes['categories'])) {
                $get_catatories = $attributes['categories']; 
              }              
              ?>
            <?php if(!empty($get_catatories)): ?>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active"  data-cat="">All</button>
                     <?php foreach($get_catatories as $cat){
                        // echo $cat['name'];
                           $cat_title = $cat['value'] != '' ? $cat['value'] : $cat['name'];  
                           $post_per_page = isset($attributes['numberOfPosts']) ? $attributes['numberOfPosts']: 8;
                         $order = isset($attributes['order']) ? $attributes['order']: 'desc';
                         $order_by = isset($attributes['order']) ? $attributes['orderBy']: 'orderBy';
                         ?> 
                        <button class="nav-link" 
                        id="<?php echo esc_attr(strtolower($cat_title)); ?>-tab" 
                        data-order="<?php echo esc_attr($order);?> "
                        data-orderby = "<?php echo esc_attr($order_by); ?>"
                        data-post="<?php echo esc_attr($post_per_page); ?>"
                        data-cat="<?php echo esc_attr($cat['id']); ?>" ><?php echo esc_html($cat_title); ?></button>
                     <?php } ?>   
                </div>
            </nav>
            <div class="tab-content blockly-blog-tab">
                <div class="loader-post-wrapper">
                    <div class="loader-post"></div>
                </div>
                <div class="tab-pane fade show active"  role="tabpanel" aria-labelledby="all-tab">
                    <div class="row justify-content-center mb-60-none tab-content-ajax">
                        <?php 
                         $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
                         $args = [
                            'post_type' => 'post',
                            'posts_per_page' => $post_per_page,
                            'post_status' => array( 'publish'),
                            'orderby'   =>  $order_by,
                            'order'   =>  $order,
                            'paged'         => $paged
                         ];

                         $get_posts = new \WP_Query( $args); 
                      
                        while($get_posts->have_posts()) : $get_posts->the_post();
                        ?>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-60">
                                <div class="blog-item">
                                    <?php if(has_post_thumbnail()) : ?>
                                        <div class="blog-thumb">
                                            <?php the_post_thumbnail(); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="blog-content">
                                        <div class="blog-post-meta">
                                            <span class="date"><?php echo  get_the_date('d M, Y'); ?></span>
                                        </div>
                                        <?php the_title('<h4 class="title"><a href="'.get_the_permalink().'">', '</a></h4>'); ?>
                                    </div>
                                </div>
                            </div>
                        <?php endwhile; ?>
                        <?php wp_reset_postdata(); ?>
                    </div>
                    <div class="all-btn two text-center">
                             <a href="javascript:void(0)" 
                             class="btn--base active ajax-post-loading" 
                              data-post="<?php echo esc_attr($post_per_page); ?>"
                              data-cat="" 
                              data-order="<?php echo esc_attr($order); ?>"
                              data-orderby = "<?php echo esc_attr($order_by); ?>"
                              data-offset="2">Load More</a>
                     </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </div>
            </div>
        <?php return ob_get_clean(); 
    }
endif;