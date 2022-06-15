<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_blog_latest_news')):
    function blockly_register_blog_latest_news() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/blog-latest-news', 
            array(
                'attributes'      => array(
                    'numberOfPosts'  => array(
                        'type'    =>'number',
                        'default' => 9
                    ),
                    'order' =>array(
                        'type'   => 'string',
                        'default'=> 'desc'
                    ),
                    'orderBy' =>array(
                        'type'    => 'string',
                        'default' => 'date'
                    ),
                ),
                'render_callback' => 'blockly_render_blog_latest_new',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_blog_latest_news' );


//render fornt end alert box 
if(!function_exists('blockly_render_blog_latest_new')):
    function blockly_render_blog_latest_new( $attributes ) {
                
        $posts = get_posts([
            'post_type' => 'post',
            'numberposts' => $attributes['numberOfPosts'] ?? 3,
        ]);
        ob_start();  ?>
           <section class="blog-section ptb-120 blockly-full">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 col-lg-8 text-center">
                        <div class="section-header">
                            <h2 class="section-title"><?php echo $attributes['title'] ?? ''; ?></h2>
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
                    <a href="/blog" class="custom-btn">More Blogs <i class="las la-angle-right"></i></a>
                </div>
            </div>
        </section>
        <?php return ob_get_clean(); 
    }
endif;