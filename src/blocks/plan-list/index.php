<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_plan_list_area')) {
    function blockly_register_plan_list_area() {
        if (! function_exists('register_block_type')) {

            register_block_type(
                'blockly/plan-list', 
                array(
                    'attributes'      => array(
                        "title" => [
                            "type" => 'string',
                            "default" => 'Price plan'
                        ],
                        "plans" => [
                            "type" => 'array',
                            "default" => [
                                ''
                            ]
                        ]
                    ),
                    'render_callback' => 'blockly_render_plan_list_area',
                )
            );
        }
    }
}

add_action( 'init', 'blockly_register_plan_list_area' );

//render fornt end alert box 
if(!function_exists('blockly_render_plan_list_area')) {
    function blockly_render_plan_list_area( $attributes ) {
        ob_start();  ?>

        <div class="plan-list-area">
            <h5 class="title"><?php echo esc_url($attributes['title']); ?></h5>
            <ul class="plan-list">
                <?php
                    if (is_array($attributes['plans'])) {
                        foreach ($attributes['plans'] as $key => $plan) {
                            echo '<li>' .
                                    str_replace(
                                        ['<strong>', '</strong>'],
                                        ['<span class="price-title">', '</span>'],
                                        $plan
                                    ) .
                                '</li>';
                        }
                    }
                ?>
            </ul>
        </div>

<?php
        return ob_get_clean(); 
    }
}
?>
