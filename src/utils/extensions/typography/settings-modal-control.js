/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import { registerPlugin } from '@wordpress/plugins';

/**
 * Internal dependencies
 */
import CoBlocksSettingsToggleControl from '../coblocks-settings/coblocks-settings-toggle-control';
import { TYPOGRAPHY_FEATURE_ENABLED_KEY } from './constants';

registerPlugin( 'blockly-typography-control', {
	render: () => applyFilters( 'blockly-show-layout-selector', true ) && (
		<CoBlocksSettingsToggleControl
			settingsKey={ TYPOGRAPHY_FEATURE_ENABLED_KEY }
			label={ __( 'Typography controls', 'blockly' ) }
			help={ __( 'Allow block-level typography controls.', 'blockly' ) }
		/>
	),
} );
