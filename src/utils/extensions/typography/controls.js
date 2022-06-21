//Internal dependencies
import TypographyControls from './../../components/typography-controls';
//WordPress dependencies
import { Component } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';

class Controls extends Component {
	render() {
		const {name,attributes} = this.props;
		let hideToolbar = false;
		if ( ! hideToolbar ) {
			return (
				<BlockControls>
					<TypographyControls { ...this.props } />
				</BlockControls>
			);
		}
		return null;
	}
}

export default Controls;
