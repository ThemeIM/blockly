<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_single_post_meta')):
    function blockly_register_single_post_meta() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/single-post-meta', 
            array(
                'attributes'      => array(
                    
                ),
                'render_callback' => 'blockly_render_blog_single_meta',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_single_post_meta' );


//render fornt end alert box 
if(!function_exists('blockly_render_blog_single_meta')):
    function blockly_render_blog_single_meta( $attributes ) {
        ob_start();  
        global $post;
        $author_id=$post->post_author; 
        ?>
            <div class="blog-section">
            <div className="auther-meta">
				  <ul className='author-meta-list list-unstyled list-inline'> 
				    <li class="list-inline-item"><span>By</span> <?php the_author_meta( 'user_nicename' , $author_id ) ?></li>
                    <li class="list-inline-item"><?php echo get_the_date( 'd M, Y', $post->ID ) ?></li>
                    <li class="list-inline-item">
                        <?php $category_detail = get_the_category($post->ID);//$post->ID
                           foreach($category_detail as $cd){
                             echo '<span>'.$cd->cat_name.'</span>';
                            }
                        ?>
                    </li>
                    <li class="list-inline-item">
                        <?php echo themeim_post_reading_time($post->ID); ?>
                    </li>
				  </ul>
			  </div>
            </div>
   
        <?php return ob_get_clean(); 
    }
endif;


if(!function_exists('themeim_post_reading_time')) {
    function themeim_post_reading_time($id){
        $content = get_post_field( 'post_content', $id);
            // count the words
            $word_count = str_word_count( strip_tags( $content ) );
            // reading time itself
            $readingtime = ceil($word_count / 150);
            // I'm going to print 'X minute read' above my post
            $totalreadingtime = $readingtime . ' Min Read';
            return $totalreadingtime;
    }
}