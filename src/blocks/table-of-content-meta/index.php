<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_toc')):
    function blockly_register_toc() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/table-of-contents-meta', 
            array(
                'attributes'      => array(
                    
                ),
                'render_callback' => 'blockly_render_toc',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_toc' );


//render fornt end alert box 
if(!function_exists('blockly_render_toc')):
    function blockly_render_toc( $attributes ) {
        ob_start();  
        global $post;
        $get_toc = get_post_meta($post->ID, 'themeim_post_toc_options', true);
        if(empty($get_toc)) return;
?>
        <div class="blog-list-area">
            <div class="blog-list-header">
                <h4 class="title">Table of Contents</h4>
                <span class="hide">Hide</span>
            </div>
            <ul class="blog-list">
                <?php if(isset($get_toc['_post_toc_repetor']) && is_array($get_toc['_post_toc_repetor'])){ ?>
                <?php foreach($get_toc['_post_toc_repetor'] as $toc){ ?>
                    <li><a href="javascript:void(0)"><?php echo esc_html($toc['_section_title']); ?></a>
                    <?php if(isset($toc['_innter_section']) && is_array($toc['_innter_section'])){ ?>
                        <ul>
                            <?php foreach($toc['_innter_section'] as $section) { ?>
                                <li><a href="<?php echo esc_attr($section['hash_link']); ?>"><?php echo esc_html($section['_sub_title']); ?></a></li>
                            <?php } ?>
                        </ul>
                    <?php } ?>    
                    </li>
                <?php } } ?>
            </ul>
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