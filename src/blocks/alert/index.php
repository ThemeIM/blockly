<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_alert_box')):
    function blockly_register_alert_box() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/alert-box', 
            array(
                'style'           => 'blockly-blocks-style-css',
                'attributes'      => array(
                    'alert_type'  => array(
                        'type'    =>'string',
                        'default' => 'primary'
                    ),
                    'content' =>array(
                        'type'   => 'string',
                    ),
                    'dismiss' =>array(
                        'type'    => 'Boolean',
                        'default' => true
                    ),
                    'backgroundColor' => array(
                        'type' => 'string',
                    ),
                    'textColor' => array(
                        'type'  => 'string',
                    )
                ),
                'render_callback' => 'blockly_render_alert_box',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_alert_box' );


//render fornt end alert box 
if(!function_exists('blockly_render_alert_box')):
    function blockly_render_alert_box( $attributes ) {
        $text_color = !empty($attributes['textColor'])?$attributes['textColor']:'#004085';
        ob_start(); ?>

        <div style="background-color:<?php echo $attributes['backgroundColor']; ?>;color:<?php echo  $text_color; ?>;border-color:<?php echo $attributes['backgroundColor'] ?>" class="wp-block-blockly-alert-box blockly-alert blockly-alert-<?php echo isset($attributes['alert_type'])?$attributes['alert_type']:'primary'; ?>"  role="alert">
            <?php echo $attributes['content']; ?>
            <?php if( isset($attributes['dismiss']) && $attributes['dismiss']=== true ){ ?>
                <button style="background:none!important;color:<?php echo  $text_color; ?>" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <?php } ?>
        </div>

        <?php return ob_get_clean(); 
    }
endif;