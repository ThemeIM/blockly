import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';

export default function Padding( props ) {
	const {
		// Padding props
		padding,
		paddingTitle,
		paddingHelp,
		paddingMin,
		paddingMax,
		paddingEnable,
		onChangePadding = () => {},

		// Padding top props
		paddingTop,
		paddingTopMin,
		paddingTopMax,
		paddingEnableTop,
		onChangePaddingTop = () => {},

		// Padding right props
		paddingRight,
		paddingRightMin,
		paddingRightMax,
		paddingEnableRight,
		onChangePaddingRight = () => {},

		// Padding bottom props
		paddingBottom,
		paddingBottomMin,
		paddingBottomMax,
		paddingEnableBottom,
		onChangePaddingBottom = () => {},

		// Padding left props
		paddingLeft,
		paddingLeftMin,
		paddingLeftMax,
		paddingEnableLeft,
		onChangePaddingLeft = () => {},

		// Padding vertical props
		paddingVertical,
		paddingEnableVertical,
		paddingVerticalMin,
		paddingVerticalMax,
		onChangePaddingVertical = () => {},

		// Padding horizontal props
		paddingHorizontal,
		paddingEnableHorizontal,
		paddingHorizontalMin,
		paddingHorizontalMax,
		onChangePaddingHorizontal = () => {},
	} = props;

	return (
		<Fragment>
			{ paddingEnable && (
				<RangeControl
					label={
						paddingTitle
							? paddingTitle
							: __( 'Padding', 'blockly' )
					}
					help={ paddingHelp ? paddingHelp : null }
					value={ padding }
					min={ paddingMin }
					max={ paddingMax }
					onChange={ onChangePadding }
				/>
			) }
			{ paddingEnableTop && (
				<RangeControl
					label={ __( 'Padding Top', 'blockly' ) }
					value={ paddingTop }
					min={ paddingTopMin }
					max={ paddingTopMax }
					onChange={ onChangePaddingTop }
				/>
			) }
			{ paddingEnableRight && (
				<RangeControl
					label={ __( 'Padding Right', 'blockly' ) }
					value={ paddingRight }
					min={ paddingRightMin }
					max={ paddingRightMax }
					onChange={ onChangePaddingRight }
				/>
			) }
			{ paddingEnableBottom && (
				<RangeControl
					label={ __( 'Padding Bottom', 'blockly' ) }
					value={ paddingBottom }
					min={ paddingBottomMin }
					max={ paddingBottomMax }
					onChange={ onChangePaddingBottom }
				/>
			) }
			{ paddingEnableLeft && (
				<RangeControl
					label={ __( 'Padding Left', 'blockly' ) }
					value={ paddingLeft }
					min={ paddingLeftMin }
					max={ paddingLeftMax }
					onChange={ onChangePaddingLeft }
				/>
			) }
			{ paddingEnableVertical && (
				<RangeControl
					label={ __( 'Padding Vertical', 'blockly' ) }
					value={ paddingVertical }
					min={ paddingVerticalMin }
					max={ paddingVerticalMax }
					onChange={ onChangePaddingVertical }
				/>
			) }
			{ paddingEnableHorizontal && (
				<RangeControl
					label={ __( 'Padding Horizontal', 'blockly' ) }
					value={ paddingHorizontal }
					min={ paddingHorizontalMin }
					max={ paddingHorizontalMax }
					onChange={ onChangePaddingHorizontal }
				/>
			) }
		</Fragment>
	);
}
