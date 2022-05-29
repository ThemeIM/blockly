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
