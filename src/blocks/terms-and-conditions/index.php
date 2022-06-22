<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_terms_and_conditions')):
    function blockly_terms_and_conditions() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/terms-and-conditions', 
            array(
                'attributes' => [
                    'items' => [
                        'type' => 'array',
                        'default' => [
                            [
                                'title' => '',
                                'description' => '',
                                'style' => '',
                            ]
                        ]
                    ],
                ],
                'render_callback' => 'blockly_render_terms_and_conditions',
            )
        );
    }
endif;

add_action( 'init', 'blockly_terms_and_conditions' );

/**
 * Render frontend
 */
if (!function_exists('blockly_render_terms_and_conditions')) {
    function blockly_render_terms_and_conditions( $attributes ) {
        ob_start();
?>
        <div class="tac-container">
            <?php
                if (!empty($attributes['items'])) {
                    foreach ($attributes['items'] as $item) {
            ?>
                        <div class="tac-item <?php echo esc_html($item['style']); ?>">
                            <h4><?php echo esc_html($item['title']); ?></h4>
                            <p><?php echo esc_html($item['description']); ?></p>
                        </div>
            <?php
                    }
                }
            ?>
        </div>
        <?php return ob_get_clean(); 
    }
}
