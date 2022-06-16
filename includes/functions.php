<?php 
/**
 * Check for Pro version.
 * @since 1.0.0
 */
if( !function_exists('blockly_is_pro') ):
    function blockly_is_pro() {
        return function_exists( 'blockly_pro_main_plugin_file' );
    }
endif;

//  register custom taxonomy 

function wpdocs_create_book_taxonomies() {
    // Add new taxonomy, make it hierarchical (like categories)
    $labels = array(
        'name'              => _x( 'Popular features', 'taxonomy general name', 'textdomain' ),
        'singular_name'     => _x( 'Features', 'taxonomy singular name', 'textdomain' ),
        'search_items'      => __( 'Search Features', 'textdomain' ),
        'all_items'         => __( 'All Features', 'textdomain' ),
        'parent_item'       => __( 'Parent Features', 'textdomain' ),
        'parent_item_colon' => __( 'Parent Features:', 'textdomain' ),
        'edit_item'         => __( 'Edit Features', 'textdomain' ),
        'update_item'       => __( 'Update Features', 'textdomain' ),
        'add_new_item'      => __( 'Add New Features', 'textdomain' ),
        'new_item_name'     => __( 'New Features Name', 'textdomain' ),
        'menu_name'         => __( 'Features', 'textdomain' ),
    );
 
    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_in_rest'      => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'feature' ),
    );
 
    register_taxonomy( 'features', array( 'product' ), $args );
 
    unset( $args );
    unset( $labels );
 
    // Add new taxonomy, NOT hierarchical (like tags)
    $labels = array(
        'name'                       => _x( 'Labels', 'taxonomy general name', 'textdomain' ),
        'singular_name'              => _x( 'Label', 'taxonomy singular name', 'textdomain' ),
        'all_items'                  => __( 'All Labels', 'textdomain' ),
        'parent_item'                => null,
        'parent_item_colon'          => null,
        'edit_item'                  => __( 'Edit Label', 'textdomain' ),
        'menu_name'                  => __( 'Labels', 'textdomain' ),
    );
 
    $args = array(
        'hierarchical'          => true,
        'labels'                => $labels,
        'show_ui'               => true,
        'show_admin_column'     => true,
        'update_count_callback' => '_update_post_term_count',
        'query_var'             => true,
        'show_in_rest' => true,
        'rewrite'               => array( 'slug' => 'label' ),
    );
 
    register_taxonomy( 'label', 'product', $args );
}
// hook into the init action and call create_book_taxonomies when it fires
add_action( 'init', 'wpdocs_create_book_taxonomies', 0 );
