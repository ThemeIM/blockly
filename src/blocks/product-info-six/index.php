<?php
/**
 * Register the block on the server
 */
if (!function_exists('blockly_product_info_six')) {
    function blockly_product_info_six() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-info-six',
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
                    'secondary_title_1' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'secondary_description_1' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'secondary_title_2' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'secondary_description_2' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                ],
                'render_callback' => 'blockly_render_product_info_six',
            )
        );
    }
}

add_action( 'init', 'blockly_product_info_six' );

/**
 * Render frontend
 */
if (!function_exists('blockly_render_product_info_six')) {
    function blockly_render_product_info_six( $attributes ) {
        ob_start();
?>
        <div class="notice-block-wrapper blockly-full">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="notice-block-item style-04">
                            <div class="content">
                                <h4 class="title"><?php echo esc_html($attributes['main_title']); ?></h4>
                                <p><?php echo esc_html($attributes['main_description']); ?></p>
                            </div>
                            <div class="content style-01">
                                <h6 class="title"><?php echo esc_html($attributes['secondary_title_1']); ?></h6>
                                <p><?php echo esc_html($attributes['secondary_description_1']); ?></p>
                            </div>
                            <div class="content style-02">
                                <h6 class="title"><?php echo esc_html($attributes['secondary_title_2']); ?></h6>
                                <p><?php echo esc_html($attributes['secondary_description_2']); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php return ob_get_clean(); 
    }
}
