<?php
/**
 * Plugin Name: Blockly
 * Description: Blockly blocks for bloging website. Create Better Content With Gutenberg.
 * Version:     10.0.0
 * Author:      ThemeIM
 * Author URI:  https://themeim.com/
 * License:     GPLv2+
 * Text Domain: blockly
 * Domain Path: /languages/
*/


/**
 * Copyright (c) 2021 themeim (email : support@themeim.com)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2 or, at
 * your discretion, any later version, as published by the Free
 * Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */


// don't call the file directly
defined( 'ABSPATH' ) || exit();

/**
 * Main Blockly Class.
 * @class Blockly
 */
final class Blockly {

    /**
	 * Blockly version.
	 * @var string
	 */
	protected $version = '1.0.0';

    /**
     * Minimum PHP version required
     * @var string
     */
    private $min_php = '5.6.0';

	/**
	 * The single instance of the class.
	 * @var Blockly
	 * @since 1.0.0
	 */
	protected static $_instance = null;

	/**
	 * Main Blockly Instance.
	 * Ensures only one instance of Blockly is loaded or can be loaded.
	 * @return Blockly - Main instance.
	 * @since 1.0.0
	 * @static
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * Cloning is forbidden.
	 * @since 1.0.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, __( 'Cloning is forbidden.', 'blockly' ), '1.0.0' );
	}

	/**
	 * Universalizing instances of this class is forbidden.
	 * @since 1.0.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, __( 'Universalizing instances of this class is forbidden.', 'blockly' ), '1.0.0' );
	}

    /**
	 * Blockly constructor.
     * @since 1.0.0
	 */
    public function __construct() {
        $this->define_constants();
		$this->includes();
		$this->init_hooks();
    }

    /**
	 * Define Blockly Constants.
	 * @return void
	 * @since 1.0.0
	 */
	private function define_constants() {
        define( 'BLY_VERSION', $this->version );
		define( 'BLY_FILE', __FILE__ );
		define( 'BLY_PATH', dirname( BLY_FILE ) );
		define( 'BLY_INCLUDES', BLY_PATH . '/includes' );
		define( 'BLY_URL', plugins_url( '', BLY_FILE ) );
		define( 'BLY_ASSETS_URL', BLY_URL . '/assets' );
        define( 'BLY_BUILD_URL', BLY_URL . '/build' );
        define( 'BLY_SRC_BLOCKS', BLY_PATH . '/src/blocks' );
		define( 'BLY_BASENAME', plugin_basename( __FILE__ ) );
    }

    /**
	 * Include all required files
	 * @since 1.0.0
	 * @return void
	*/
	public function includes() {
        require_once( BLY_INCLUDES . '/functions.php' );
		require_once BLY_INCLUDES . '/class-blockly-font-loader.php';
		require_once BLY_INCLUDES . '/class-blockly-post-meta.php';
        require_once( BLY_SRC_BLOCKS . '/subscription-forms/index.php' );
        require_once( BLY_SRC_BLOCKS . '/blog/index.php' );
        require_once( BLY_SRC_BLOCKS . '/blog/blog-ajax.php' );
        require_once( BLY_SRC_BLOCKS . '/search/index.php' );
        require_once( BLY_SRC_BLOCKS . '/single-post-meta/index.php' );
        require_once( BLY_SRC_BLOCKS . '/single-post-share/index.php' );
        require_once( BLY_SRC_BLOCKS . '/recent-post/index.php' );
        require_once( BLY_SRC_BLOCKS . '/themeim-loop-query/index.php' );
        require_once( BLY_SRC_BLOCKS . '/plan-list/index.php' );
        require_once( BLY_SRC_BLOCKS . '/blog-lastest-news/index.php' );
        require_once( BLY_SRC_BLOCKS . '/product-archive/product.php' );
        require_once( BLY_SRC_BLOCKS . '/product-archive/ajax-action.php' );
       	require_once( BLY_SRC_BLOCKS . '/featured-products-slider/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/trending-products-slider/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-filter-section/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-filter-section/ajax.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-filter-category/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-filter-category/ajax.php' );
       	require_once( BLY_SRC_BLOCKS . '/site-header/site-header.php' );
       	require_once( BLY_SRC_BLOCKS . '/table-of-content-meta/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/table-section/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/blog-author/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/header-section/index.php' );

       	require_once( BLY_SRC_BLOCKS . '/terms-and-conditions/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-info-one/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-info-two/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-info-three/index.php' );
       	require_once( BLY_SRC_BLOCKS . '/product-info-four/index.php' );
    }

    /**
	 * Hook into actions and filters.
	 * @since 1.0.0
	*/
	private function init_hooks() {
        //register_activation_hook( __FILE__, array( $this, 'activate_plugin' ) );
        //register_deactivation_hook( __FILE__, array( $this, 'deactivate_plugin' ) );
        add_action( 'admin_init', array( $this, 'check_environment' ) );
        add_action( 'plugins_loaded', array( $this, 'on_plugins_loaded' ), - 1 );
		add_action( 'init', array( $this, 'localization_setup' ) );
		add_filter( 'plugin_row_meta', array( $this, 'plugin_row_meta' ), 10, 2 );
		//add_filter( 'plugin_action_links_'.BLY_BASENAME, array( &$this, 'plugin_action_links' ) );

        add_action('init',array($this,'block_assets'));
        add_action( 'enqueue_block_editor_assets', array($this,'editor_assets' ));
        add_action( 'wp_enqueue_scripts', array($this,'enqueue_styles_scripts' ));
		add_action( 'wp_enqueue_scripts', array($this,'block_assets' ));
		add_filter( 'block_categories_all', array($this,'add_custom_block_category') );
    }

	/**
	 * Adds the blockly category.
	 * @param array $categories Existing block categories.
	 * @return array Updated block categories.
	 * @since 1.0.0
	 */
	public function add_custom_block_category( $categories ) {
		$category_title = __( 'Blockly', 'blockly' );

		if ( blockly_is_pro() ) {
			$category_title = __( 'Blockly Pro', 'blockly' );
		}

		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'blockly',
					'title' => $category_title,
				),
			)
		);
	}

    /**
	 * Register style and script fire on action init.
	 * @since 1.0.0
	*/
    public function block_assets() {
        // Load the compiled styles.
	    wp_register_style( 'blockly-bootstarp-css', plugin_dir_url(__FILE__) . 'assets/css/bootstrap.min.css', array(), BLY_VERSION );
	    wp_register_style( 'blockly-common-style', plugin_dir_url(__FILE__) . 'assets/css/common.css', array(), BLY_VERSION );
	    wp_register_style( 'blockly-blocks-style-css', plugin_dir_url(__FILE__) . 'build/style-index.css', array(), BLY_VERSION );
        wp_register_script( 'blockly-hide-alert-js', plugin_dir_url(__FILE__) . 'assets/js/hide-alert.js', array( 'jquery' ) );
		wp_register_script( 'blockly-bootstarp-js', plugin_dir_url(__FILE__) . 'assets/js/bootstrap.bundle.min.js', array( 'jquery' ) );
		wp_enqueue_style('blockly-blocks-style-css');
    }

    /**
	 * Register style and script fire on action block editor asets.
	 * @since 1.0.0
	*/
    public function editor_assets() {
        // Load the compiled blocks into the editor.
        wp_enqueue_script('blockly-blocks-js', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n' ),BLY_VERSION,true);
        // Load the compiled styles into the editor.
        wp_enqueue_style('blockly-blocks-editor-css', plugin_dir_url(__FILE__) . 'build/index.css', array( 'wp-block-editor' ), BLY_VERSION );

        $user_data = wp_get_current_user();
        unset( $user_data->user_pass, $user_data->user_email );

        // Pass in REST URL.
        wp_localize_script(
            'blockly-blocks-js',
            'blockly_globals',
            array(
                'rest_url'      => esc_url( rest_url() ),
                'user_data'     => $user_data,
                'pro_activated' => blockly_is_pro(),
                'is_wpe'        => function_exists( 'is_wpe' ),
            )
        );

		// blockly block data
		wp_localize_script(
			'blockly-blocks-js',
			'blocklyBlockData',
			array(
				'blocklyNonce'					=> wp_create_nonce( 'blocklyNonce' ),
				'typographyControlsEnabled'   	=> true,
				'blockly_url' 					=> plugin_dir_url(__FILE__),
			)
		);

    }

    /**
	 * Enqueue Script and Style if the post has a block only.
	 * @since 1.0.0
	*/
    public function enqueue_styles_scripts() {
		wp_enqueue_script( 'blockly-bootstarp-js' );
		wp_enqueue_style('blockly-common-style');

		// add global script
		wp_enqueue_script('blockly-global', plugin_dir_url(__FILE__).'/assets/js/global.js');
		wp_localize_script( 'blockly-global', 'blockly_global', [
				'blockly_url' => plugin_dir_url(__FILE__),
			]
    	);
		wp_add_inline_script( 'blockly-global', 'const MYSCRIPT = ' . json_encode( array(
			'blockly_url' => plugin_dir_url(__FILE__),
		) ), 'before' );
    }

 
    // /**
    //  * What type of request is this?
    //  * @param  string $type admin, ajax, cron or frontend.
    //  * @since 1.0.0
    //  * @return bool
    //  */
    // private function is_request($type) {
    //     switch ($type) {
    //         case 'admin':
    //             return is_admin();
    //         case 'ajax':
    //             return defined('DOING_AJAX');
    //         case 'cron':
    //             return defined('DOING_CRON');
    //         case 'frontend':
    //             return (!is_admin() || defined('DOING_AJAX')) && !defined('DOING_CRON') && !defined('REST_REQUEST');
    //     }
    // }

    /**
	 * Ensure theme and server variable compatibility
     * @since 1.0.0
	 */
    public function check_environment()
    {
        if (version_compare(PHP_VERSION, $this->min_php, '<=') &&  version_compare( WP_VERSION, '3.6', '<=' ) ) {
            deactivate_plugins(plugin_basename(__FILE__));
            wp_die("Unsupported PHP version Min required PHP Version:{$this->min_php}");
        }
    }

    // /**
	//  * Activate plugin.
	//  * @return void
	//  * @since 1.0.0
	//  */
	// public function activate_plugin() {
	// }

	// /**
	//  * Deactivate plugin.
	//  * @return void
	//  * @since 1.0.0
	//  */
	// public function deactivate_plugin() {
	// 	if ( ! current_user_can( 'activate_plugins' ) ) {
	// 		return;
	// 	}
	// }

    /**
	 * loaded all plugins, trigger the blockly_loaded hook.
	 * @since 1.0.0
	 */
	public function on_plugins_loaded() {
		do_action( 'blockly_loaded' );
	}

	/**
	 * Initialize plugin for localization
	 * @return void
	 * @since 1.0.0
	 */
	public function localization_setup() {
		load_plugin_textdomain( 'blockly', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	// /**
	//  * Plugin action links
	//  * @param array $links
    //  * @since 1.0.0
	//  */
	// public function plugin_action_links( $links ) {
	// 	$admin_url = admin_url();
	// 	$link = array( '<a href="'.$admin_url.'options-general.php?page=blockly_settings">Settings</a>' );
	// 	return array_merge( $links, $link );
	// }

	/**
	 * Add plugin docs links in plugin row links
	 * @param mixed $links Links
	 * @param mixed $file File
	 * @return array $links
	 * @since 1.0.0
	 */
	public function plugin_row_meta( $links, $file ) {
		if ( plugin_basename( __FILE__ ) === $file ) {
			$row_meta = array(
				'docs' => '<a href="' . esc_url( apply_filters( 'blockly_docs_url', 'https://themeim.com/demo/blockly/docs' ) ) . '" aria-label="' . esc_attr__( 'View documentation', 'blockly' ) . '">' . esc_html__( 'Docs', 'blockly' ) . '</a>',
			);
			return array_merge( $links, $row_meta );
		}
		return $links;
	}

	/**
	 * @return string
	 * @since 1.0.0
	 */
	public function get_version() {
		return $this->version;
	}


}

/**
 * @return Blockly
 */
function blockly_init() {
	return Blockly::instance();
}
//fire off the plugin
blockly_init();

add_filter('user_contactmethods','cfw_add_user_social_links');

function cfw_add_user_social_links($user_contact) {
    $user_contact['twitter'] = esc_html__('Twitter Link', 'blockly');
    $user_contact['facebook'] = esc_html__('Facebook Link', 'blockly');
    $user_contact['dlinkedin'] = esc_html__('LinkedIn Link', 'blockly');
    $user_contact['instagram'] = esc_html__('Instagram Link', 'blockly');
    $user_contact['pinterest'] = esc_html__('Pinterest Link', 'blockly');
    $user_contact['github'] = esc_html__('Github Link', 'blockly');
    $user_contact['dribbble'] = esc_html__('Dribbble Link', 'blockly');
    $user_contact['behance'] = esc_html__('Behance Link', 'blockly');

    return $user_contact;
}
