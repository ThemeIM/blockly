//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { SelectControl, ToggleControl } from '@wordpress/components';
import { PanelColorSettings } from '@wordpress/block-editor';

export default function ButtonSettings( props ) {
	const {
		enableButtonBackgroundColor,
		buttonBackgroundColor,
		onChangeButtonColor = () => {},
		enableButtonTextColor,
		buttonTextColor,
		onChangeButtonTextColor = () => {},
		enableButtonSize,
		buttonSize,
		onChangeButtonSize = () => {},
		enableButtonShape,
		buttonShape,
		onChangeButtonShape = () => {},
		enableButtonTarget,
		buttonTarget,
		onChangeButtonTarget = () => {},
	} = props;

	// Button size values
	const buttonSizeOptions = [
		{
			value: 'bly-button-size-small',
			label: __( 'Small', 'blockly' ),
		},
		{
			value: 'bly-button-size-medium',
			label: __( 'Medium', 'blockly' ),
		},
		{
			value: 'bly-button-size-large',
			label: __( 'Large', 'blockly' ),
		},
		{
			value: 'bly-button-size-extralarge',
			label: __( 'Extra Large', 'blockly' ),
		},
	];

	// Button shape
	const buttonShapeOptions = [
		{
			value: 'bly-button-shape-square',
			label: __( 'Square', 'blockly' ),
		},
		{
			value: 'bly-button-shape-rounded',
			label: __( 'Rounded Square', 'blockly' ),
		},
		{
			value: 'bly-button-shape-circular',
			label: __( 'Circular', 'blockly' ),
		},
	];

	return (
		<Fragment>
				{ false !== enableButtonTarget && (
					<ToggleControl
						label={ __('Open link in new window','blockly') }
						checked={ buttonTarget }
						onChange={ onChangeButtonTarget }
					/>
				) }
				{ false !== enableButtonSize && (
					<SelectControl
						selected={ buttonSize }
						label={ __( 'Button Size', 'blockly' ) }
						value={ buttonSize }
						options={ buttonSizeOptions.map(
							( { value, label } ) => ( {
								value,
								label,
							} )
						) }
						onChange={ onChangeButtonSize }
					/>
				) }
				{ false !== enableButtonShape && (
					<SelectControl
						label={ __( 'Button Shape', 'blockly' ) }
						value={ buttonShape }
						options={ buttonShapeOptions.map(
							( { value, label } ) => ( {
								value,
								label,
							} )
						) }
						onChange={ onChangeButtonShape }
					/>
				) }
				{ false !== enableButtonBackgroundColor && (
					<PanelColorSettings
						title={ __( 'Button Color', 'blockly' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: buttonBackgroundColor,
								onChange: onChangeButtonColor,
								label: __( 'Button Color', 'blockly' ),
							},
						] }
					></PanelColorSettings>
				) }
				{ false !== enableButtonTextColor && (
					<PanelColorSettings
						title={ __( 'Button Text Color', 'blockly' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: buttonTextColor,
								onChange: onChangeButtonTextColor,
								label: __(
									'Button Text Color',
									'blockly'
								),
							},
						] }
					></PanelColorSettings>
				) }
		</Fragment>
	);
}
