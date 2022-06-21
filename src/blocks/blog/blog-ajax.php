<?php 
function blockly_blog_archive_ajax_enqueue_script() {   
    wp_enqueue_style( 'blockly-blog', plugin_dir_url( __FILE__ ) . 'scrpts/blog.css' );
    wp_enqueue_script( 'blockly-blog-js', plugin_dir_url( __FILE__ ) . 'scrpts/ajax.js', [ 'jquery' ] );
    wp_enqueue_script( 'blockly-blog-js' );
			wp_localize_script( 'blockly-blog-js', 'ajax_object',
            array( 'ajax_url' => admin_url( 'admin-ajax.php' ), 
			        'nonce' => wp_create_nonce('blockly-post')
			) );
}
add_action('wp_enqueue_scripts', 'blockly_blog_archive_ajax_enqueue_script');

add_action( 'wp_ajax_get_posts_default', 'get_posts_default' );
add_action( 'wp_ajax_nopriv_get_posts_default', 'get_posts_default' );

function get_posts_default() {	
    if ( ! wp_verify_nonce( $_POST['nonce'], 'blockly-post' ) ) {
        die ( 'this not valid request');
    }

    $args = [
        'post_type' => 'post',
        'posts_per_page' => $_POST['posts_per_page'],
        'order' => $_POST['posts_per_page'],
        'order' => $_POST['order'],
        'orderBy' => $_POST['orderby'],
        'post_status' => array( 'publish'),
     ];
     if(isset($_POST['cat']) && $_POST['cat'] != ''){
        $args['cat'] = $_POST['cat'];
     }
     if(isset($_POST['paged']) && $_POST['paged'] != ''){
        $args['paged'] = $_POST['paged'];
     }

     $get_posts = new \WP_Query( $args);
     if($get_posts->have_posts()) {
     while($get_posts->have_posts()) : $get_posts->the_post();
     ?>
     <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-60">
            <div class="blog-item">
                <?php if(has_post_thumbnail()) : ?>
                    <div class="blog-thumb">
                        <?php the_post_thumbnail(); ?>
                    </div>
                <?php endif; ?>
                <div class="blog-content">
                    <div class="blog-post-meta">
                        <span class="date"><?php echo  get_the_date('d M, Y'); ?></span>
                    </div>
                    <?php the_title('<h4 class="title"><a href="'.get_the_permalink().'">', '</a></h4>'); ?>
                </div>
            </div>
        </div>
        <?php endwhile;}else{
             echo 'No More post available';
        } ?>
        <?php wp_reset_postdata(); ?>
     <?php 
    wp_die();
}