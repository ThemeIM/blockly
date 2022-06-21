/**
 * Button Wrapper
 */
const { Component } = wp.element;
import classnames from 'classnames';

export default class customButton extends Component {
	constructor( props ) {
		super( ...arguments );
	}

	render() {
		return (
			<div style={ { textAlign: this.props.attributes.buttonAlignment } }
				className={ classnames(
					this.props.className,
					'bly-block-button'
				) }
			>
				{ this.props.children }
			</div>
		);
	}
}
