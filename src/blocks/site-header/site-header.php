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

                                <?php
                                // pages - 1
                                if(!empty($attributes['pages'])) {
                                ?>
                                <div class="toggle-menu collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav main-menu">
                                        <li class="menu_has_children">
                                            <a href="#0">
                                                <div class="toggle-menu">
                                                    WordPress <i class="fas fa-chevron-down"></i>
                                                </div>
                                            </a>
                                            <ul class="sub-menu">
                                                <?php foreach($attributes['pages'] as $page) { ?>
                                                    <li>
                                                        <?php $link = isset($page['link']) ? $page['link'] : ''; ?>
                                                        <a href="<?php echo esc_url($link); ?>">
                                                         <?php $menu_title = isset($page['title']) ? $page['title'] : ''; ?>
                                                         <?php $icon_class = isset($page['icon']) ? $page['icon']: ''; ?>
                                                        <i class="<?php echo esc_attr($icon_class); ?>"></i> <?php echo esc_html($menu_title); ?></a>
                                                    </li>
                                                <?php } ?>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <?php }  ?>

                               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <?php
                                    // pages - 2
                                    if(!empty($attributes['pages_type_2'])) {
                                    ?>
                                        <ul class="navbar-nav main-menu">
                                            <li class="menu_has_children">
                                                <a href="#0">
                                                    <div class="toggle-menu">
                                                    Shopify <i class="fas fa-chevron-down"></i>
                                                    </div>
                                                </a>
                                                <ul class="sub-menu">
                                                    <?php foreach($attributes['pages_type_2'] as $page) { ?>
                                                        <li>
                                                            <?php $link = isset($page['link']) ? $page['link'] : ''; ?>
                                                            <a href="<?php echo esc_url($link); ?>">
                                                            <?php $menu_title = isset($page['title']) ? $page['title'] : ''; ?>
                                                            <?php $icon_class = isset($page['icon']) ? $page['icon']: ''; ?>
                                                            <i class="<?php echo esc_attr($icon_class); ?>"></i> <?php echo esc_html($menu_title); ?></a>
                                                        </li>
                                                    <?php } ?>
                                                </ul>
                                            </li>
                                        </ul>
                                    <?php
                                    }

                                    // pages - 3
                                    if(!empty($attributes['pages_type_3'])) {
                                    ?>
                                    <ul class="navbar-nav main-menu">
                                        <li class="menu_has_children">
                                            <a href="#0">
                                                <div class="toggle-menu">
                                                Shopify <i class="fas fa-chevron-down"></i>
                                                </div>
                                            </a>
                                            <ul class="sub-menu">
                                                <?php foreach($attributes['pages_type_3'] as $page) { ?>
                                                    <li>
                                                        <?php $link = isset($page['link']) ? $page['link'] : ''; ?>
                                                        <a href="<?php echo esc_url($link); ?>">
                                                         <?php $menu_title = isset($page['title']) ? $page['title'] : ''; ?>
                                                         <?php $icon_class = isset($page['icon']) ? $page['icon']: ''; ?>
                                                        <i class="<?php echo esc_attr($icon_class); ?>"></i> <?php echo esc_html($menu_title); ?></a>
                                                    </li>
                                                <?php } ?>
                                            </ul>
                                        </li>
                                    </ul>
                                    <?php } ?>
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
                                                        <?php $link_p = isset($product['link']) ? $product['link']: ''; ?>
                                                        <li><a href="<?php echo esc_url($link_p); ?>">
                                                        <?php $link_title = isset($product['title']) ? $product['title']: ''; ?>
                                                             <span><?php echo esc_html($link_title); ?></span> </a>
                                                        </li>
                                                    <?php } ?>
                                                </ul>
                                            </div>
                                        </div>
                                       <?php endif; ?>

                                        <?php if ( ! class_exists( 'WooCommerce', false ) ) { ?>
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
                                        <?php } ?>
                                       <div class="header-action-area">
                                           <div class="header-action">
                                           <?php if(isset($attributes['hire'])){ ?>
                                                <a href="<?php echo esc_url($attributes['hire']); ?>">Hire Us <i class="fas fa-paper-plane ml-2"></i></a>
                                           <?php } ?>
                                           <?php if(isset($attributes['login'])){
                                              
                                              $login_text = is_user_logged_in(  ) ? 'Dashboard' : 'login';
                                            
                                            ?>
                                                <a href="<?php echo esc_url($attributes['login']); ?>"><?php  echo esc_html( $login_text ); ?> <i class="icon-Group-788 ml-2"></i></a>
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
      <div class="cursor" style="top: 539px; left: 108px;"></div>
      <div class="cursor-follower" style="top: 498px; left: 607px;"></div>
        <?php return ob_get_clean(); 
    }
endif;

add_filter( 'woocommerce_add_to_cart_fragments', function($fragments) {
    ob_start();

    if ( ! class_exists( 'WooCommerce', false ) ) {
?>
        <div class="header-cart-action">
            <span class="icon">
                <i class="las la-shopping-cart"></i>
            </span>
            <span class="cart-badge"> <?php echo WC()->cart->get_cart_contents_count(); ?></span>
        </div>
<?php
    }

    $fragments['div.header-cart-action'] = ob_get_clean();

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
