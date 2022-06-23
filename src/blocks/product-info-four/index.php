<?php
/**
 * Register the block on the server
 */
if(!function_exists('blockly_product_info_four')):
    function blockly_product_info_four() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/product-info-four',
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
                    'info_items' => [
                        'type' => 'array',
                        'default' => [
                            [
                                'icon' => '',
                                'text' => '',
                            ]
                        ]
                    ]
                ],
                'render_callback' => 'blockly_render_product_info_four',
            )
        );
    }
endif;

add_action( 'init', 'blockly_product_info_four' );

/**
 * Render frontend
 */
if (!function_exists('blockly_render_product_info_four')) {
    function blockly_render_product_info_four( $attributes ) {
        ob_start();
?>
        <div class="notice-block-wrapper blockly-full">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="notice-block-item style-03">
                            <div class="content">
                                <h4 class="title"><?php echo esc_html($attributes['main_title']); ?></h4>
                                <p><?php echo esc_html($attributes['main_description']); ?></p>
                            </div>
                            <div class="content style-01">
                                <h6 class="title"><?php echo esc_html($attributes['secondary_title']); ?></h6>
                                <p><?php echo esc_html($attributes['secondary_description']); ?></p>
                            </div>
                            <div class="features-box-wrap style-01">
                                <?php
                                    if (!empty($attributes['info_items'])) {
                                        foreach ($attributes['info_items'] as $item) {
                                ?>
                                            <div class="icon-box-item-02">
                                                <div class="icon">
                                                    <img src="<?php echo esc_url($item['icon']); ?>" alt="">
                                                </div>
                                                <div class="content">
                                                    <h6 class="title"><?php echo esc_url($item['text']); ?></h6>
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
