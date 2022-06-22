<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_subscription')):
    function blockly_register_subscription() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/subscription-forms', 
            array(
                'attributes'      => array(
                    'actionUrl'  => array(
                        'type'    =>'string',
                        'default' => ''
                    ),
                    'members' =>array(
                        'type'   => 'string',
                        'default'=> '1500'
                    ),
                    'customers' =>array(
                        'type'    => 'string',
                        'default' => '4000'
                    ),
                    'downloades' => array(
                        'type' => 'string',
                        'default'=>'#cce5ff'
                    ),
                    'textColor' => array(
                        'type'  => 'string',
                        'default'=> '#25060'
                    )
                ),
                'render_callback' => 'blockly_render_subscription',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_subscription' );


//render fornt end alert box 
if(!function_exists('blockly_render_subscription')):
    function blockly_render_subscription( $attributes ) {
        ob_start();  ?>

          <div class="footer-top-area">
                <div class="row justify-content-center align-items-center mb-30-none">
                    <div class="col-xl-8 col-lg-6 mb-30">
                        <div class="footer-subscribe-area">
                            <!-- Begin Mailchimp Signup Form -->
                            
                            <form action="<?php echo esc_url($attributes['actionUrl']); ?>" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate newsletter-form subscribe-form" target="_blank" novalidate>
                                <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL"  placeholder="Enter your Mail">
                                <button type="submit" class="btn--base" name="subscribe" id="mc-embedded-subscribe" style="margin: 0 !important">Subscribe Now <i class="fas fa-paper-plane ml-2"></i></button>
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style="display:none"></div>
                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                    <input type="text" name="ca323fecfbb5c877385729e34e326cf158419852" tabindex="-1" />
                                </div>
                           </form>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 mb-30">
                        <div class="footer-statistics-area">
                            <div class="row justify-content-center mb-20-none">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xxs-4 mb-20">
                                    <div class="statistics-item">
                                        <h4 class="title"><?php echo esc_html($attributes['members']); ?>+</h4>
                                        <p>Members</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xxs-4 mb-20">
                                    <div class="statistics-item">
                                        <h4 class="title"><?php echo esc_html($attributes['customers']); ?>+</h4>
                                        <p>Customers</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xxs-4 mb-20">
                                    <div class="statistics-item">
                                        <h4 class="title"><?php echo esc_html($attributes['downloades']); ?>+</h4>
                                        <p>Downloads</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php return ob_get_clean(); 
    }
endif; 