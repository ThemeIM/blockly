<?php
/**
 * Server-side rendering for the alert_box block
 * @since   1.0.0
 */

/**
 * Register the block on the server
 */
if(!function_exists('blockly_site_nav')):
    function blockly_site_nav() {
        if ( ! function_exists( 'register_block_type' ) ) {
            return;
        }
        register_block_type(
            'blockly/site-header', 
            array(
                
                'render_callback' => 'blockly_site_header',
            )
        );
    }
endif;
add_action( 'init', 'blockly_site_nav' );


//render fornt end alert box 
if(!function_exists('blockly_site_header')):
    function blockly_site_header( $attributes ) {

        ob_start();  ?>
        <header class="header-section">
           <div class="header">
               <div class="header-bottom-area">
                   <div class="container custom-container">
                       <div class="header-menu-content">
                           <nav class="navbar navbar-expand-xl p-0">
                               <a class="site-logo site-title" href="<?php echo esc_url(home_url('/')); ?>">
                               <?php if(isset($attributes['logo']) && $attributes['logo'] != ''): ?>
                                 <img src="<?php echo esc_url($attributes['logo']); ?>" alt="site-logo">
                                 <?php endif; ?>
                              </a>
                               <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                   <span class="toggle-bar"></span>
                               </button>
                               <?php if(isset($attributes['pages']) && $attributes['pages'] != '') { ?>
                                <div class="toggle-menu collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav main-menu">
                                        <li class="menu_has_children">
                                            <a href="#0">
                                                <div class="toggle-menu">
                                                    Browse <i class="fas fa-chevron-down"></i>
                                                </div>
                                            </a>
                                            <ul class="sub-menu">
                                                <?php foreach($attributes['pages'] as $page) { ?>
                                                    <li>
                                                        <a href="<?php echo esc_url($page['link']); ?>">
                                                        <i class="<?php echo $page['icon']; ?>"></i> <?php echo esc_html($page['title']); ?></a>
                                                    </li>
                                                <?php } ?>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                               <?php }  ?>
                               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                   <ul class="navbar-nav main-menu ml-auto">
                                       <?php if(isset($attributes['freeItems'])){ ?>
                                       <li><a href="<?php echo esc_url($attributes['freeItems']); ?>">Free items</a></li>
                                       <?php } ?>
                                       <?php if(isset($attributes['pricePlan'])){ ?>
                                       <li><a href="<?php echo esc_url($attributes['pricePlan']); ?>">Pricing</a></li>
                                       <?php } ?>
                                   </ul>
                                   <div class="header-right">
                                       <?php if(isset($attributes['products']) && $attributes['products'] != '') : ?>
                                        <div class="toggle-menu product-nav">
                                            <?php if(isset($attributes['productDropdownIcon'] ) && '' != $attributes['productDropdownIcon']): ?>
                                            <span class="icon">
                                                <img src="<?php echo esc_url($attributes['productDropdownIcon']); ?>" alt="icon">
                                            </span>
                                            <?php endif; ?>
                                            <span class="product-nav-menu"> <a href="#">Our Products</a> </span>
                                            <div class="product-navigation">
                                                <ul class="product-nav-list">
                                                    <?php foreach($attributes['products'] as $product) { ?>
                                                        <li><a href="<?php echo esc_url($product['link']); ?>">
                                                             <span><?php echo esc_html($product['title']); ?></span> </a>
                                                        </li>
                                                    <?php } ?>
                                                </ul>
                                            </div>
                                        </div>
                                       <?php endif; ?>
                                       <div class="header-cart-area">
                                           <div class="header-cart-action">
                                               <span class="icon">
                                                   <i class="las la-shopping-cart"></i>
                                               </span>
                                               <span class="cart-badge"><?php echo WC()->cart->get_cart_contents_count(); ?></span>
                                           </div>
                                           <div class="cart-widget-dropdown">
                                               <?php woocommerce_mini_cart(); ?>
                                           </div>
                                       </div>
                                       <div class="header-action-area">
                                           <div class="header-action">
                                           <?php if(isset($attributes['hire'])){ ?>
                                                <a href="<?php echo esc_url($attributes['hire']); ?>">Hire Us <i class="fas fa-paper-plane ml-2"></i></a>
                                           <?php } ?>
                                           <?php if(isset($attributes['login'])){ ?>
                                                <a href="<?php echo esc_url($attributes['login']); ?>">Login <i class="icon-Group-788 ml-2"></i></a>
                                           <?php } ?>
                                               
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </nav>
                       </div>
                   </div>
               </div>
           </div>
      </header>
        <?php return ob_get_clean(); 
    }
endif;


add_filter( 'woocommerce_add_to_cart_fragments', function($fragments) {

    ob_start();
    ?>
    <div class="header-cart-action">
        <span class="icon">
            <i class="las la-shopping-cart"></i>
        </span>
        <span class="cart-badge"> <?php echo WC()->cart->get_cart_contents_count(); ?></span>
    </div>
    <?php $fragments['div.header-cart-action'] = ob_get_clean();

    return $fragments;

} );

add_filter( 'woocommerce_add_to_cart_fragments', function($fragments) {

    ob_start();
    ?>

    <div class="cart-widget-dropdown">
        <?php woocommerce_mini_cart(); ?>
    </div>

    <?php $fragments['div.cart-widget-dropdown'] = ob_get_clean();

    return $fragments;

} );