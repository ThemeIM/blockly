//wordpress dependencie
import { Component } from '@wordpress/element';
//external dependencie
import classnames from 'classnames';

//profile box wrapper component
export default class ProfileBox extends Component {

	render() {
	
		const {
			profileAlignment,
			profileImgURL,
			profileFontSize,
			profileBackgroundColor,
			profileTextColor,
			profileAvatarShape,
			style_type,
			padding,
			borderRadius,
		} = this.props.attributes;

		return (
			<div
				style={ {
					backgroundColor: profileBackgroundColor,
					color: profileTextColor,
					padding: padding ? padding + '%' : null,
					borderRadius: borderRadius ? borderRadius : null,
				} }
				className={ classnames(
					this.props.className,
					profileAlignment,
					profileAvatarShape,
					style_type,
					{ 'bly-has-avatar': profileImgURL },
					'bly-font-size-' + profileFontSize,
					'bly-block-profile',
					style_type == 'style_one' && 'bly-profile-column'
				) }
			>
				{ this.props.children }
			
			</div>
		);
	}
}
