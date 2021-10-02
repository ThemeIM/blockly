/**
 * Testimonial Block Wrapper
 */

// Setup the block
import { Component }  from '@wordpress/element';

// Import block dependencies and components
 import classnames from 'classnames';

/**
 * Create a Testimonial wrapper Component
 */
export default class Testimonial extends Component {
	render() {
		// Setup the attributes
		const {
			attributes: {
				testimonialImgURL,
				testimonialBackgroundColor,
				testimonialTextColor,
				testimonialFontSize,
				testimonialCiteAlign,
				style_type,
			},
		} = this.props;

		return (
			<div
				style={ {
					background: testimonialBackgroundColor
						? testimonialBackgroundColor
						: '#f2f2f2',
					color: testimonialTextColor
						? testimonialTextColor
						: '#32373c',
				} }
				className={ classnames(
					this.props.className,
					testimonialCiteAlign,
					{ 'bly-has-avatar': testimonialImgURL },
					'bly-font-size-' + testimonialFontSize,
					'bly-block-testimonial',
					style_type == 'style_one' && 'style_one',
					style_type == 'style_two' && 'style_two'
				) }
			>
				<div className={ classnames('blockly-testimonial-wrap')}>
					{ this.props.children }
				</div>
			</div>
		);
	}
}
