<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_single_post_share')):
    function blockly_register_single_post_share() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/single-post-share', 
            array(
                'attributes'      => array(
                    
                ),
                'render_callback' => 'blockly_render_blog_single_share',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_single_post_share' );


//render fornt end alert box 
if(!function_exists('blockly_render_blog_single_share')):
    function blockly_render_blog_single_share( $attributes ) {
        ob_start();  
        global $post;
        ?>
          <ul class="footer-social">
            <li><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo esc_url(get_the_permalink($post->ID)); ?>"><i class="fab fa-facebook-f"></i></a></li>
            <li><a target="_blank" href="https://twitter.com/intent/tweet?url=<?php echo esc_url(get_the_permalink($post->ID)); ?>&text=<?php echo esc_html(get_the_title($post->ID)) ?>"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://pinterest.com/pin/create/button/?url=<?php echo esc_url(get_the_permalink($post->ID)); ?>&media=<?php echo esc_html(get_the_post_thumbnail( $post->ID )); ?>&description=<?php echo esc_html(get_the_title($post->ID)) ?>"><i class="fab fa-pinterest-p"></i></a></li>
            <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo esc_url(get_the_permalink($post->ID)); ?>"><i class="fab fa-linkedin"></i></a></li>
         </ul>
        <?php return ob_get_clean(); 
    }
endif;
