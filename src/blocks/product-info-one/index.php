<?php
/**
 * Register the block on the server
 */
if(!function_exists('blockly_product_info_one')):
    function blockly_product_info_one() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/terms-and-conditions', 
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
                    'info_items' => [
                        'type' => 'array',
                        'default' => []
                    ],
                    'secondary_title' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'secondary_description' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                ],
                'render_callback' => 'blockly_render_product_info_one',
            )
        );
    }
endif;

add_action( 'init', 'blockly_product_info_one' );

/**
 * Render frontend
 */
if (!function_exists('blockly_render_product_info_one')) {
    function blockly_render_product_info_one( $attributes ) {
        ob_start();
?>
        <div class="notice-block-wrapper">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="notice-block-item">
                            <div class="content">
                                <h4 class="title"><?php echo esc_html($attributes['main_title']); ?></h4>
                                <p><?php echo esc_html($attributes['main_description']); ?></p>
                            </div>
                            <div class="check-list-items">
                                <ul class="list-parent">
                                    <?php
                                        if (!empty($attributes['items'])) {
                                            foreach ($attributes['items'] as $item) {
                                    ?>
                                                <li class="list-child"><?php echo esc_html($item); ?></li>
                                    <?php
                                            }
                                        }
                                    ?>
                                </ul>
                            </div>
                            <div class="content style-01">
                                <h6 class="title"><?php echo esc_html($attributes['secondary_title']); ?></h6>
                                <p><?php echo esc_html($attributes['secondary_description']); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php return ob_get_clean(); 
    }
}
