<?php
/**
 * Register the block on the server
 */
if(!function_exists('blockly_product_info_three')):
    function blockly_product_info_three() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-info-three', 
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
                    'info_items' => [
                        'type' => 'array',
                        'default' => [
                            'icon' => '',
                            'title' => '',
                            'description' => ''
                        ]
                    ],
                ],
                'render_callback' => 'blockly_render_product_info_three',
            )
        );
    }
endif;

add_action( 'init', 'blockly_product_info_three' );

/**
 * Render frontend
 */
if (!function_exists('blockly_render_product_info_three')) {
    function blockly_render_product_info_three( $attributes ) {
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
                            <div class="icon-box-wrap">
                                <?php
                                    if (!empty($attributes['info_items'])) {
                                        foreach ($attributes['info_items'] as $item) {
                                ?>
                                            <div class="icon-box-item">
                                                <div class="icon">
                                                    <img src="<?php echo esc_url($item['icon']); ?>" alt="">
                                                </div>
                                                <div class="content">
                                                    <h6 class="title"><?php echo esc_html($item['title']); ?></h6>
                                                    <p><?php echo esc_html($item['description']); ?></p>
                                                </div>
                                            </div>
                                <?php
                                        }
                                    }
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php return ob_get_clean(); 
    }
}
