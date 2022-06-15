<?php
/**
 * Server-side rendering for the blog section block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_blog_section')) {
    function blockly_register_blog_section() {
        if (! function_exists('register_block_type')) {

            register_block_type(
                'blockly/blog-row',
                array(
                    'attributes'      => array(
                        "title" => [
                            "type" => "string",
                            "default" => ""
                        ],
                        "subtitle" => [
                            "type" => "string",
                            "default" => ""
                        ],
                        "posts" => [
                            "type" => "string",
                            "default" => []
                        ],
                    ),
                    'render_callback' => 'blockly_render_blog_section',
                )
            );
        }
    }
}

add_action( 'init', 'blockly_register_blog_section' );

if(!function_exists('blockly_render_blog_section')) {
    function blockly_render_blog_section( $attributes ) {
        $posts = get_posts([
            'post_type' => 'post',
            'numberposts' => $attributes['num_of_posts'] ?? 3,
        ]);

        ob_start();
?>
        <section class="blog-section ptb-120 blockly-full">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8 text-center">
                        <div class="section-header">
                            <h2 class="section-title"><?php echo $attributes['title']['rendered'] ?? ''; ?></h2>
                            <p><?php echo $attributes['subtitle'] ?? ''; ?></p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mb-30-none">
                    <?php
                        foreach ($posts as $post) {
                    ?>
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                <div class="blog-item">
                                    <div class="blog-thumb">
                                        <?php echo get_the_post_thumbnail($post->ID, 'thumbnail'); ?>
                                    </div>
                                    <div class="blog-content">
                                        <div class="blog-post-meta">
                                            <span class="date"> <?php echo get_the_date($post->ID, 'm d, Y'); ?></span>
                                        </div>
                                        <h4 class="title">
                                            <a href="<?php echo esc_url(get_the_permalink($post->ID)); ?>">
                                                <?php echo esc_html(get_the_title($post->ID)); ?>
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                    <?php
                        }
                    ?>
                </div>
                <div class="all-btn text-center mt-50">
                    <a href="<?php echo the_permalink(); ?>" class="custom-btn">More Blogs <i class="las la-angle-right"></i></a>
                </div>
            </div>
        </section>
<?php
        return ob_get_clean(); 
    }
}
?>
