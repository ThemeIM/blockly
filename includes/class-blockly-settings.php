<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Blockly_Settings {
	/**
	 * This plugin's instance.
	 *
	 * @var Blockly_Settings
	 */
	private static $instance;

	/**
	 * Registers the plugin.
	 *
	 * @return Blockly_Settings
	 */
	public static function register() {
		if ( null === self::$instance ) {
			self::$instance = new Blockly_Settings();
		}

		return self::$instance;
	}

	/**
	 * The Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_settings' ) );
		add_action( 'init', array( $this, 'Blockly_settings_assets' ) );
	}

	/**
	 * Localize CoBlock Settings Status blockly settings.
	 *
	 * @access public
	 */
	public function Blockly_settings_assets() {
		wp_localize_script(
			'blockly-blocks-js',
			'blocklySettings',
			array(
				'blocklySettingsEnabled' => (bool) apply_filters( 'blockly_show_settings_panel', true ),
			)
		);
	}

	
	/**
	 * Register blockly settings.
	 *
	 * @access public
	 */
	public function register_settings() {

		register_setting(
			'blockly_typography_controls_enabled',
			'blockly_typography_controls_enabled',
			array(
				'type'              => 'boolean',
				'description'       => __( 'Setting use to disable or enable typography controls across the site.', 'blockly' ),
				'sanitize_callback' => null,
				'show_in_rest'      => true,
				'default'           => true,
			)
		);

	}
}

Blockly_Settings::register();
