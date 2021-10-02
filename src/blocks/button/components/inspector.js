//wordpress dependencies
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
// Import Inspector settings
import ButtonSettings from '../../../utils/inspector/button';

export default class Inspector extends Component {
	
	render() {
		
		const {
			attributes:{ buttonBackgroundColor, buttonTextColor, buttonSize, buttonShape, buttonTarget }, 
			setAttributes 
		} = this.props;
		

		return (
			<InspectorControls key="inspector">
				<PanelBody>
					<ButtonSettings
						// Open in new window
						buttonTarget={ buttonTarget }
						onChangeButtonTarget={ ( value ) =>
							setAttributes( { buttonTarget: ! buttonTarget } )
						}
						// Button Size
						buttonSize={ buttonSize }
						onChangeButtonSize={ ( buttonSize ) =>
							setAttributes( { buttonSize } )
						}
						// Button Shape
						buttonShape={ buttonShape }
						onChangeButtonShape={ ( buttonShape ) =>
							setAttributes( { buttonShape } )
						}
						// Button color
						buttonBackgroundColor={ buttonBackgroundColor }
						onChangeButtonColor={ ( buttonBackgroundColor ) =>
							setAttributes( { buttonBackgroundColor } )
						}
						// Button text color
						buttonTextColor={ buttonTextColor }
						onChangeButtonTextColor={ ( buttonTextColor ) =>
							setAttributes( { buttonTextColor } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}
