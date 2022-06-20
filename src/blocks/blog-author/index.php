<?php
/**
 * Server-side rendering for the blog author block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_blog_author')):
    function blockly_register_blog_author() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/blog-author', 
            array(
                'style'           => 'blockly-blocks-style-css',
                'attributes'      => array(
                    // 'alert_type'  => array(
                    //     'type'    =>'string',
                    //     'default' => 'primary'
                    // ),
                ),
                'render_callback' => 'blockly_render_blog_author',
            )
        );
    }
endif;

add_action( 'init', 'blockly_register_blog_author' );

if (!function_exists('blockly_render_blog_author')) {
    function blockly_render_blog_author( $attributes ) {
        $post_id =  get_the_ID();
        $author_id = get_post_field ('post_author', $post_id);
        $display_name = get_the_author_meta( 'nickname' , $author_id );
        $user_description = get_the_author_meta('user_description', $author_id);

        $social_sites = [
            [
                'name' => 'Facebook',
                'slug' => 'facebook',
                'icon' => 'fab fa-facebook-f'
            ],
            [
                'name' => 'Twitter',
                'slug' => 'twitter',
                'icon' => 'fab fa-twitter'
            ],
            [
                'name' => 'Linkedin',
                'slug' => 'linkedin',
                'icon' => 'fab fa-linkedin-in'
            ],
            [
                'name' => 'Instagram',
                'slug' => 'instagram',
                'icon' => 'fab fa-instagram'
            ],
            [
                'name' => 'Pinterest',
                'slug' => 'pinterest',
                'icon' => 'fab fa-pinterest-p'
            ],
            [
                'name' => 'Github',
                'slug' => 'github',
                'icon' => 'fab fa-github'
            ],
            [
                'name' => 'Dribbble',
                'slug' => 'dribbble',
                'icon' => 'fab fa-dribbble'
            ],
            [
                'name' => 'Behance',
                'slug' => 'behance',
                'icon' => 'fab fa-behance'
            ],
        ];

        ob_start();
?>
        <div class="bly-profile-column bly-profile-content-wrap">
            <h2 class="bly-profile-name" style="color: #32373c"><?php echo esc_html($display_name); ?></h2>
            <p class="bly-profile-title" style="color: #32373c"></p>
            <div class="bly-profile-text">
                <p>
                   <?php echo esc_html($user_description); ?>
                </p>
            </div>
            <ul class="bly-social-links">
                <?php
                    foreach ($social_sites as $social_site) {
                        if (!empty(get_the_author_meta($social_site['slug']))) { 
                ?>
                            <li>
                                <a href="<?php echo get_the_author_meta($social_site['slug']); ?>" target="_blank" rel="noopener noreferrer">
                                    <?php echo esc_html($social_site['name']); ?>
                                    <i class="<?php echo $social_site['icon']; ?>"></i>
                                </a>
                            </li>
                <?php
                        }
                    }
                ?>
            </ul>
        </div>

<?php   return ob_get_clean(); 
    }
}
