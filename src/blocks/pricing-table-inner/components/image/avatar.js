import { Component } from '@wordpress/element';
import classnames from 'classnames';
export default class Avatar extends Component {
    render(){
        return(
            <div className={classnames( 'bly-profile-avatar-wrap')} >
				<div className="bly-profile-image-wrap">
					{ this.props.children }
				</div>
			</div>
        )
    }
}