<?php
/**
 * Register the block on the server
 */
if (!function_exists('blockly_product_info_five')) {
    function blockly_product_info_five() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-info-five',
            array(
                'attributes' => [
                    'title' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'description' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'image' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                ],
                'render_callback' => 'blockly_render_product_info_five',
            )
        );
    }
}

add_action( 'init', 'blockly_product_info_five' );

/**
 * Render frontend
 */
if (!function_exists('blockly_render_product_info_five')) {
    function blockly_render_product_info_five( $attributes ) {
        ob_start();
?>
        <div class="notice-block-wrapper">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="notice-block-item style-02">
                            <div class="content">
                                <h4 class="title"><?php echo esc_html($attributes['title']); ?></h4>
                                <p><?php echo esc_html($attributes['description']); ?></p>
                            </div>
                            <div class="thumbnail">
                                <img src="<?php echo esc_url($attributes['image']); ?>" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php return ob_get_clean(); 
    }
}
