<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_themeim_loop_query')):
    function blockly_register_themeim_loop_query() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/themeim-loop-query', 
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
                'render_callback' => 'blockly_render_default_post',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_themeim_loop_query' );


//render fornt end alert box 
if(!function_exists('blockly_render_default_post')):
    function blockly_render_default_post( $attributes ) {
        ob_start();  ?>
            <div class="blog-section ptb-120">
    <div class="">
        <div class="blog-tab">
            <div class="tab-content blockly-blog-tab">
                <div class="loader-post-wrapper">
                    <div class="loader-post"></div>
                </div>
                <div class="tab-pane fade show active"  role="tabpanel" aria-labelledby="all-tab">
                    <div class="row justify-content-center mb-60-none tab-content-ajax">
                        <?php 
                        if(have_posts()){
                        while(have_posts()) : the_post();
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
                         <div class="all-btn two text-center">
                             <a href="javascript:void(0)" 
                             class="btn--base active ajax-post-loading" 
                              
                              data-offset="2">Load More</a>
                     </div>
                        <?php 
                        wp_reset_postdata();
                    }else{

                        } ?>
                    </div>
                   
                </div>
            </div>
        </div>
        <?php  ?>
    </div>
            </div>
        <?php return ob_get_clean(); 
    }
endif;