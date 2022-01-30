<?php
/**
 * Server-side rendering for the faq block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_faq')):
    function blockly_register_faq() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/faq', 
            [
                'style'           => 'blockly-bootstarp-css',
                'attributes'      => [
                    'faq_contents' => [
                        'type' => 'array',
                        'default' => []
                    ],
                    'backgroundColor' => [
                        'type' => 'string',
                        'default'=>'transparent'
                    ],
                    'textColor' => [
                        'type'  => 'string',
                        'default'=> '#000'
                    ]
                ],
                'render_callback' => 'blockly_render_faq',
            ]
        );
    }
endif;
add_action( 'init', 'blockly_register_faq' );


//render fornt end alert box 
if(!function_exists('blockly_render_faq')):
    function blockly_render_faq( $attributes ) {
        $allowed_html_field = [
            'a'=>[
                'class'  => [],
                'id' => [],
                'href'=>[],
                'target'=>[]
            ],
            'span'=>[
                'class'  => [],
                'id' => [],
                'span'=>[]
            ],
            'br'=>[],
            'strong'=>[],
            'em'=>[],
        ];

        $backgroundColor = !empty($attributes['backgroundColor'])?$attributes['backgroundColor']:'transparent';        
        $borderRadius = !empty($attributes['borderRadius'])?$attributes['borderRadius']:'0';
        $padding = !empty($attributes['padding'])?$attributes['padding']:'0';

        $titleBackgroundColor = !empty($attributes['titleBackgroundColor'])?$attributes['titleBackgroundColor']:'transparent';
        $titleTextColor = !empty($attributes['titleTextColor'])?$attributes['titleTextColor']:'#000000';
        $titleBorderRadius = !empty($attributes['titleBorderRadius'])?$attributes['titleBorderRadius']:'0';
        $titlePadding = !empty($attributes['titlePadding'])?$attributes['titlePadding']:'10';

        $contentBackgroundColor = !empty($attributes['contentBackgroundColor'])?$attributes['contentBackgroundColor']:'transparent';
        $contentTextColor = !empty($attributes['contentTextColor'])?$attributes['contentTextColor']:'#000000';
        $contentBorderRadius = !empty($attributes['contentBorderRadius'])?$attributes['contentBorderRadius']:'0';
        $contentPadding = !empty($attributes['contentPadding'])?$attributes['contentPadding']:'10';

        $faq_contents = !empty($attributes['faq_contents'])?$attributes['faq_contents']:[];
       
        ob_start();
        
        $random_number = rand(999, 999999);
        
        ?>
        <div style="background-color:<?php echo esc_attr($backgroundColor); ?>;border-color:<?php echo esc_attr($backgroundColor); ?>;border-radius:<?php echo esc_attr($borderRadius); ?>px;padding:<?php echo esc_attr($padding); ?>px" class="faq_area mb-120 wp-block-blockly-faq blockly-faq"  role="faq">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8 offset-lg-2">
                        <div class="accordion" id="accordion-<?php echo esc_attr($random_number); ?>">
                            <?php 
                            
                            $a = 0;
                            
                            foreach($faq_contents as $faq_content){
                            
                            // $collapse_class = (0 == $a) ? '' : 'collapsed';
                            // $show_class = (0 != $a) ? 'collapse' : '';
                            // $aria_expanded = (0 == $a) ? 'true' : 'false';

                            $collapse_class = 'collapsed';
                            $show_class = 'collapse';
                            $aria_expanded ='false';

                            $a++;
                            $random__item_number = rand(999, 999999);

                            ?>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="heading_<?php echo esc_attr($random__item_number); ?>">
                                        <button class="accordion-button <?php echo esc_attr($collapse_class); ?>" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse_<?php echo esc_attr($random__item_number); ?>" aria-expanded="<?php echo esc_attr($aria_expanded); ?>" aria-controls="collapse_<?php echo esc_attr($random__item_number); ?>" style="color:<?php echo esc_attr($titleTextColor); ?>;background-color:<?php echo esc_attr($titleBackgroundColor); ?>;border-radius:<?php echo esc_attr($titleBorderRadius); ?>px;padding:<?php echo esc_attr($titlePadding); ?>px">
                                            <?php echo wp_kses($faq_content['faq_title'],$allowed_html_field); ?>
                                        </button>
                                    </h2>
                                    <div id="collapse_<?php echo esc_attr($random__item_number); ?>" class="accordion-collapse <?php echo esc_attr($show_class); ?>" aria-labelledby="heading_<?php echo esc_attr($random__item_number); ?>"
                                        data-bs-parent="#accordion-<?php echo esc_attr($random_number); ?>" style="color:<?php echo esc_attr($contentTextColor); ?>;background-color:<?php echo esc_attr($contentBackgroundColor); ?>;border-radius:<?php echo esc_attr($contentBorderRadius); ?>px;padding:<?php echo esc_attr($contentPadding); ?>px">
                                        <div class="accordion-body">
                                            <?php echo wp_kses($faq_content['faq_content'],$allowed_html_field); ?>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php return ob_get_clean(); 
    }
endif;