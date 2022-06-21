<?php
/**
 * Register the block on the server for banner section
 */
if(!function_exists('blockly_register_header_section')) {
    function blockly_register_header_section() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/header-section', 
            array(
                'attributes' => array(
                    'subtitle' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'title' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'subtitle_2' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'subtitle_3' => [
                        'type' => 'string',
                        'default' => ''
                    ],
                    'customer_text' => [
                        'type' => 'string',
                        'default' => ''
                    ]
                ),
                'render_callback' => 'blockly_render_header_section',
            )
        );
    }
}

add_action( 'init', 'blockly_register_header_section' );

if (!function_exists('blockly_render_header_section')) {
    function blockly_render_header_section( $attributes ) {
        $banner_items_one = [
            [
                'class' => 'banner-group-element-one',
                'image_src' => 'assets/images/element/element-6.png'
            ],
            [
                'class' => 'banner-group-element-two',
                'image_src' => 'assets/images/element/REPLACE-THIS-SCREEN1111211171111.png'
            ],
            [
                'class' => 'banner-group-element-three',
                'image_src' => 'assets/images/element/project/project-1.png'
            ],
            [
                'class' => 'banner-group-element-four',
                'image_src' => 'assets/images/element/project/project-2.png'
            ],
            [
                'class' => 'banner-group-element-five',
                'image_src' => 'assets/images/element/project/project-3.png'
            ],
            [
                'class' => 'banner-group-element-six',
                'image_src' => 'assets/images/element/project/project-4.png'
            ],
            [
                'class' => 'banner-group-element-seven',
                'image_src' => 'assets/images/element/project/project-5.png'
            ],
            [
                'class' => 'banner-group-element-eight',
                'image_src' => 'assets/images/element/project/project-6.png'
            ],
            [
                'class' => 'banner-group-element-nine',
                'image_src' => 'assets/images/element/project/project-7.png'
            ],
            [
                'class' => 'banner-group-element-ten',
                'image_src' => 'assets/images/element/project/project-8.png'
            ],
        ];

        $banner_items_two = [
            [
                'class' => 'banner-group-element-twelve',
                'image_src' => 'assets/images/element/element-9.png'
            ],
            [
                'class' => 'banner-group-element-thirteen',
                'image_src' => 'assets/images/element/element-10.png'
            ],
            [
                'class' => 'banner-group-element-fourteen',
                'image_src' => 'assets/images/element/element-12.png'
            ],
            [
                'class' => 'banner-group-element-fifteen',
                'image_src' => 'assets/images/element/element-11.png'
            ],
            [
                'class' => 'banner-group-element-sixteen',
                'image_src' => 'assets/images/element/element-11.png'
            ],
            [
                'class' => 'banner-group-element-seventeen',
                'image_src' => 'assets/images/element/element-11.png'
            ],
            [
                'class' => 'banner-group-element-eightteen',
                'image_src' => 'assets/images/element/element-12.png'
            ],
            [
                'class' => 'banner-group-element-nineteen',
                'image_src' => 'assets/images/element/element-12.png'
            ],
            [
                'class' => 'banner-group-element-twenty',
                'image_src' => 'assets/images/element/element-12.png'
            ],
        ];

        ob_start();
?>

<section class="banner-section blockly-full">
    <div class="banner-element">
        <img src="<?php echo get_template_directory_uri(); ?>assets/images/element/element-5.png" alt="element">
    </div>
    <div class="banner-group-shape">
        <?php foreach ($banner_items_one as $element) { ?>
            <div class="<?php echo $element['class']; ?>">
                <img src="<?php echo get_template_directory_uri() . '/' . $element['image_src']; ?>" alt="element">
            </div>
        <?php } ?>
        <?php foreach ($banner_items_two as $element) { ?>
            <div class="<?php echo $element['class']; ?>">
                <img src="<?php echo get_template_directory_uri() . '/' . $element['image_src']; ?>" alt="element">
            </div>
        <?php } ?>
    </div>
    <div class="container custom-container">
        <div class="row align-items-end mb-30-none">
            <div class="col-xl-7 col-lg-8 mb-30">
                <div class="banner-content" data-aos="fade-right" data-aos-duration="1800">
                    <div class="banner-content-element">
                        <img src="<?php echo get_template_directory_uri(); ?>assets/images/element/element-4.png" alt="element">
                    </div>
                    <h3 class="sub-title"><?php echo $attributes['subtitle']; ?></h3>
                    <h1 class="title"><?php echo esc_html(html_entity_decode($attributes['title'])); ?></h1>
                    <h3 class="inner-title"><?php echo esc_html(html_entity_decode($attributes['subtitle_2'])); ?></h3>
                    <p><?php echo esc_html(html_entity_decode($attributes['subtitle_3'])); ?></p>
                    <div class="banner-arrow">
                        <img src="<?php echo get_template_directory_uri(); ?>assets/images/element/element-1.png" alt="element">
                    </div>
                    <div class="banner-widget">
                        <div class="banner-widget-wrapper">
                            <div class="banner-widget-left">
                                <div class="banner-widget-thumb">
                                    <img src="<?php echo get_template_directory_uri(); ?>assets/images/element/element-2.png" alt="element">
                                </div>
                            </div>
                            <div class="banner-widget-middle">
                                <div class="banner-widget-content">
                                    <p><?php echo html_entity_decode($attributes['customer_text']); ?></p>
                                </div>
                            </div>
                            <div class="banner-widget-right">
                                <div class="banner-widget-thumb">
                                    <img src="<?php echo get_template_directory_uri(); ?>assets/images/element/element-3.png" alt="element">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        <?php return ob_get_clean(); 
    }
}
