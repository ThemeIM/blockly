<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_search')):
    function blockly_register_search() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/search', 
            array(
                'attributes'      => array(
                    
                ),
                'render_callback' => 'blockly_render_search',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_search' );


//render fornt end alert box 
if(!function_exists('blockly_render_search')):
    function blockly_render_search( $attributes ) {
        ob_start();  ?>
            <div class="widget-box blog-widget-box mb-30">
                <h4 class="widget-title">Search</h4>
                <div class="search-widget-box">
                    <form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
                        <input type="text" name="s" class="form--control" placeholder="Search" autocomplete="off" value="<?php echo get_search_query() ?>">
                        <button type="submit"><i class="icon-Search"></i></button>
                    </form>
                </div>
            </div>
        <?php return ob_get_clean(); 
    }
endif;