<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_register_search')):
    function blockly_register_search() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/search', 
            array(
                'attributes'      => array(
                    
                ),
                'render_callback' => 'blockly_render_search',
            )
        );
    }
endif;
add_action( 'init', 'blockly_register_search' );


//render fornt end alert box 
if(!function_exists('blockly_render_search')):
    function blockly_render_search( $attributes ) {
         ob_start();  
         $style = isset($attributes['searchStyle']) ? $attributes['searchStyle']: '1';
         $background_Image = isset($attributes['backgroudImage']) ? $attributes['backgroudImage']: '';
         $icon_image = isset($attributes['iconImage']) ? $attributes['iconImage']: '';
         if($style == 1){
        ?>
            <div class="widget-box blog-widget-box mb-30">
                <h4 class="widget-title">Search</h4>
                <div class="search-widget-box">
                    <form role="search" method="get" class="search-form" action="<?php echo home_url( '/' ); ?>">
                        <input type="text" name="s" class="form--control" placeholder="Search" autocomplete="off" value="<?php echo get_search_query() ?>">
                        <button type="submit"><i class="icon-Search"></i></button>
                    </form>
                </div>
            </div>
          <?php } else{
              ?>
              <section class="banner-section inner-banner-section">
                <?php if($background_Image != '') : ?>
                <div class="banner-element">
                    <img src="<?php echo esc_url($background_Image); ?>" alt="element">
                </div>
                <?php endif; ?>
                <div class="form-wrapper">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="product-category-search-area two">
                                <form role="search" method="get" class="product-search-form" action="<?php echo home_url( '/' ); ?>">
                                    <input type="text" class="form--control" name="s" placeholder="Search For Knowelduge" autocomplete="off" value="<?php echo get_search_query() ?>">
                                    <?php if($icon_image != '') : ?>
                                        <button type="submit" class="submit-btn">
                                            <img src="<?php echo esc_url($icon_image); ?>" alt="icon">
                                        </button>
                                    <?php endif; ?>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
</section>
          
        <?php } return ob_get_clean(); 
    }
endif;