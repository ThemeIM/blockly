<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_recent_posts')):
    function blockly_register_recent_posts() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/recent-post', 
            array(
                'attributes'      => array(
                    
                ),
                'render_callback' => 'blockly_render_recent_post',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_recent_posts' );


//render fornt end alert box 
if(!function_exists('blockly_render_recent_post')):
    function blockly_render_recent_post( $attributes ) { 
       
       $args = [
            'post_type'        => 'post',
            'numberposts'      => isset($attributes['numberOfPosts']) ? $attributes['numberOfPosts']: 5,
       ];

       $get_post = get_posts($args);
        ?>
          <div class="widget-box blog-widget-box mb-30">
                        <h4 class="widget-title">Recent Posts</h4>
                        <div class="popular-widget-box">
                            <?php foreach($get_post as $post){  ?>
                            <div class="single-popular-item d-flex flex-wrap align-items-center">
                                <div class="popular-item-thumb">
                                    <?php echo get_the_post_thumbnail($post->ID, 'thumbnail'); ?>
                                </div>
                                <div class="popular-item-content">
                                    <span class="blog-date">Aug 23,2021<?php echo get_the_date($post->ID, 'm d, Y'); ?></span>
                                    <h4 class="title"><a href="<?php echo esc_url(get_the_permalink($post->ID)); ?>"><?php echo esc_html(get_the_title($post->ID)); ?></a></h4>
                                </div>
                            </div>
                            <?php  } ?>
                        </div>
                    </div>
        <?php return ob_get_clean(); 
    }
endif;
