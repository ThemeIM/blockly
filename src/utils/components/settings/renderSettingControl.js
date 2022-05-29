import { Component } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import getCurrentUserData from './../data-providers/currentUserData';

export default class RenderSettingControl extends Component {
	
	render() {
		if ( 'undefined' === typeof this.props.children ) {
			return null;
		}

		/**
		 * Let the temporary hacks begin.
		 * Get the block name this setting is associated with.
		 */
		let fallback = false;

		if (
			'undefined' === typeof this.props.children.props ||
			'undefined' === typeof this.props.children.props.name
		) {
			fallback = true;
		}

		if (
			fallback &&
			( 'undefined' === typeof this.props.children._owner ||
				'undefined' ===
					typeof this.props.children._owner.memoizedProps ||
				'undefined' ===
					typeof this.props.children._owner.memoizedProps.name )
		) {
			return this.props.children;
		}

		const blockName = fallback
			? this.props.children._owner.memoizedProps.name
			: this.props.children.props.name;

		//A filter for determining whether or not a setting should be rendered.
		if (
			applyFilters(
				'bly_should_render_block_setting',
				true,
				blockName,
				this.props.id,
				getCurrentUserData()
			)
		) {
			return this.props.children;
		}

		return null;
	}
}
