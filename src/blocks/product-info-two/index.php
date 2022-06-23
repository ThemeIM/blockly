<?php
/**
 * Register the block on the server
 */
if(!function_exists('blockly_product_info_two')):
    function blockly_product_info_two() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-info-two', 
            array(
                'attributes' => [
                    'main_title' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'main_description' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'secondary_title' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'secondary_description' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'button_title' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'button_link' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                ],
                'render_callback' => 'blockly_render_product_info_two',
            )
        );
    }
endif;

add_action( 'init', 'blockly_product_info_two' );

/**
 * Render frontend
 */
if (!function_exists('blockly_render_product_info_two')) {
    function blockly_render_product_info_two( $attributes ) {
        ob_start();
?>
        <div class="notice-block-wrapper blockly-full">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="notice-block-item style-01">
                            <div class="content">
                                <h4 class="title"><?php echo esc_html($attributes['main_title']); ?></h4>
                                <p><?php echo esc_html($attributes['main_title']); ?></p>
                            </div>
                            <div class="content style-01">
                                <h6 class="title"><?php echo esc_html($attributes['main_title']); ?></h6>
                                <p><?php echo esc_html($attributes['main_title']); ?></p>
                            </div>
                            <div class="btn-wrapper">
                                <a href="<?php echo esc_html($attributes['main_title']); ?>" class="boxed-btn"><?php echo esc_html($attributes['main_title']); ?> <img src="assets/icon/download.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php return ob_get_clean(); 
    }
}
